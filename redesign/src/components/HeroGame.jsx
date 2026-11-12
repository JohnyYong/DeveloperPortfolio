import { useEffect, useRef, useState } from "react";

/*
  Hero mini-game.
  A little slime hunts coins using A* (octile heuristic, 8-way, no corner cutting).
  Move the cursor to lead it; leave it alone and it plans its own route to the nearest coin.
  Click a tile to build / break a wall.
*/

const CELL = 30;
const WALL_RATE = 0.2;
const MAX_COINS = 7;
const STEP_MS = 115;

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

class Heap {
  constructor() { this.a = []; }
  get size() { return this.a.length; }
  push(n) {
    const a = this.a; a.push(n);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p].f <= a[i].f) break;
      [a[p], a[i]] = [a[i], a[p]]; i = p;
    }
  }
  pop() {
    const a = this.a; const top = a[0]; const last = a.pop();
    if (a.length) {
      a[0] = last; let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < a.length && a[l].f < a[m].f) m = l;
        if (r < a.length && a[r].f < a[m].f) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; i = m;
      }
    }
    return top;
  }
}

function astar(grid, cols, rows, start, goal) {
  const SQ2 = Math.SQRT2;
  const idx = (x, y) => y * cols + x;
  const h = (x, y) => {
    const dx = Math.abs(x - goal.x), dy = Math.abs(y - goal.y);
    return dx + dy + (SQ2 - 2) * Math.min(dx, dy);
  };
  const g = new Float32Array(cols * rows).fill(Infinity);
  const parent = new Int32Array(cols * rows).fill(-1);
  const closed = new Uint8Array(cols * rows);
  const open = new Heap();
  const s = idx(start.x, start.y);
  g[s] = 0;
  open.push({ i: s, x: start.x, y: start.y, f: h(start.x, start.y) });
  const expanded = [];
  while (open.size) {
    const cur = open.pop();
    if (closed[cur.i]) continue;
    closed[cur.i] = 1;
    expanded.push(cur.i);
    if (cur.x === goal.x && cur.y === goal.y) {
      const path = [];
      for (let i = cur.i; i !== -1; i = parent[i]) path.push(i);
      return { path: path.reverse(), expanded };
    }
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const nx = cur.x + dx, ny = cur.y + dy;
        if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
        const ni = idx(nx, ny);
        if (grid[ni] || closed[ni]) continue;
        if (dx && dy && (grid[idx(cur.x + dx, cur.y)] || grid[idx(cur.x, cur.y + dy)])) continue;
        const ng = g[cur.i] + (dx && dy ? SQ2 : 1);
        if (ng < g[ni]) {
          g[ni] = ng; parent[ni] = cur.i;
          open.push({ i: ni, x: nx, y: ny, f: ng + h(nx, ny) });
        }
      }
    }
  }
  return { path: [], expanded };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export default function HeroGame() {
  const canvasRef = useRef(null);
  const [hud, setHud] = useState({ coins: 0, expanded: 0, ms: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rand = mulberry32(11);

    let cols, rows, grid, coins = [], pops = [];
    let agent, prev, moveT = 0, facing = { x: 1, y: 0 };
    let plan = { path: [], expanded: [] }, step = 0, planT = 0, goal = null;
    let pointer = null, pointerAt = -1e9, score = 0, raf, lastPlan = 0, startT = performance.now(), wasFollowing = false;

    const idx = (c) => c.y * cols + c.x;
    const inGrid = (x, y) => x >= 0 && y >= 0 && x < cols && y < rows;
    const free = (c) => inGrid(c.x, c.y) && !grid[idx(c)];
    const nearestFree = (c) => {
      for (let r = 0; r < 8; r++)
        for (let dy = -r; dy <= r; dy++)
          for (let dx = -r; dx <= r; dx++) {
            const p = { x: c.x + dx, y: c.y + dy };
            if (free(p)) return p;
          }
      return c;
    };
    // Coins only spawn in the open play area: right of the hero text, below the nav
    let zone = { x0: 0, x1: 1, y0: 0, y1: 1 };
    const randomFree = () => {
      for (let k = 0; k < 300; k++) {
        const c = {
          x: Math.floor(zone.x0 + rand() * (zone.x1 - zone.x0)),
          y: Math.floor(zone.y0 + rand() * (zone.y1 - zone.y0)),
        };
        if (free(c) && !coins.some((o) => o.x === c.x && o.y === c.y) && !(agent && c.x === agent.x && c.y === agent.y)) return c;
      }
      return null;
    };
    const spawnCoin = () => {
      const c = randomFree();
      if (c) coins.push({ ...c, born: performance.now(), phase: rand() * 6 });
    };

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL); rows = Math.ceil(height / CELL);
      grid = new Uint8Array(cols * rows);
      for (let i = 0; i < grid.length; i++) grid[i] = rand() < WALL_RATE ? 1 : 0;
      // On wide screens keep the play area on the right, away from the text
      const wide = width > 900;
      zone = wide
        ? { x0: Math.floor(cols * 0.58), x1: cols - 1, y0: 4, y1: rows - 2 }
        : { x0: 1, x1: cols - 1, y0: 3, y1: Math.max(4, Math.floor(rows * 0.3)) };
      const startX = wide ? Math.floor(cols * 0.75) : Math.floor(cols * 0.5);
      agent = nearestFree({ x: startX, y: wide ? Math.floor(rows * 0.5) : 4 });
      prev = { ...agent };
      coins = [];
      for (let k = 0; k < MAX_COINS; k++) spawnCoin();
      plan = { path: [], expanded: [] }; goal = null;
    }

    function replan(target, now) {
      const t0 = performance.now();
      plan = astar(grid, cols, rows, agent, target);
      const ms = performance.now() - t0;
      step = 0; planT = now; goal = target;
      setHud((h) => ({ ...h, expanded: plan.expanded.length, ms }));
    }

    function chooseCoin(now) {
      if (!coins.length) return;
      const sorted = [...coins].sort(
        (a, b) => Math.hypot(a.x - agent.x, a.y - agent.y) - Math.hypot(b.x - agent.x, b.y - agent.y)
      );
      for (const c of sorted.slice(0, 3)) {
        replan(c, now);
        if (plan.path.length) return;
      }
    }

    function pickup(now) {
      const k = coins.findIndex((c) => c.x === agent.x && c.y === agent.y);
      if (k < 0) return false;
      coins.splice(k, 1);
      score++;
      setHud((h) => ({ ...h, coins: score }));
      if (score === 1 || score % 5 === 0) say(score % 5 === 0 ? `${score} coins!` : "Yum!", now);
      const cx = agent.x * CELL + CELL / 2, cy = agent.y * CELL + CELL / 2;
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        pops.push({ x: cx, y: cy, vx: Math.cos(a) * 1.8, vy: Math.sin(a) * 1.8 - 0.6, t: now, text: false });
      }
      pops.push({ x: cx, y: cy - 8, vx: 0, vy: -0.6, t: now, text: true });
      setTimeout(spawnCoin, 1400);
      return true;
    }

    function drawSlime(now) {
      const t = Math.min(1, (now - moveT) / STEP_MS);
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const x = (prev.x + (agent.x - prev.x) * e) * CELL + CELL / 2;
      const yBase = (prev.y + (agent.y - prev.y) * e) * CELL + CELL / 2;
      const moving = t < 1;
      const hop = moving ? Math.sin(t * Math.PI) * 5 : 0;
      const breathe = reduce ? 0 : Math.sin(now / 260) * 0.8;
      const sx = 1 + (moving ? 0.08 : 0.03 * Math.sin(now / 260));
      const sy = 1 - (moving ? 0.08 : 0.03 * Math.sin(now / 260));
      const y = yBase - hop * 1.6;
      const S = 1.7; // slime size
      // shadow
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.beginPath(); ctx.ellipse(x, yBase + 15, 15 - hop, 4.5, 0, 0, Math.PI * 2); ctx.fill();
      // glow
      const glow = ctx.createRadialGradient(x, y, 4, x, y, 40 + breathe * 2);
      glow.addColorStop(0, "rgba(62, 224, 207, 0.35)");
      glow.addColorStop(1, "rgba(62, 224, 207, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(x, y, 40 + breathe * 2, 0, Math.PI * 2); ctx.fill();
      // body
      ctx.save(); ctx.translate(x, y); ctx.scale(sx * S, sy * S);
      const grad = ctx.createLinearGradient(0, -11, 0, 10);
      grad.addColorStop(0, "#7ff5e6"); grad.addColorStop(1, "#21b3a5");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(-11, 8);
      ctx.bezierCurveTo(-13, -4, -7, -12, 0, -12);
      ctx.bezierCurveTo(7, -12, 13, -4, 11, 8);
      ctx.quadraticCurveTo(0, 11, -11, 8);
      ctx.fill();
      // shine
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.beginPath(); ctx.ellipse(-5, -6, 2.6, 1.6, -0.5, 0, Math.PI * 2); ctx.fill();
      // eyes look where it's heading
      const ex = facing.x * 1.6, ey = facing.y * 1.2;
      ctx.fillStyle = "#14112b";
      ctx.beginPath(); ctx.ellipse(-4 + ex, -1 + ey, 1.8, 2.6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(4 + ex, -1 + ey, 1.8, 2.6, 0, 0, Math.PI * 2); ctx.fill();
      // blush
      ctx.fillStyle = "rgba(255, 107, 154, 0.55)";
      ctx.beginPath(); ctx.ellipse(-7.5, 3.5, 2, 1.2, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(7.5, 3.5, 2, 1.2, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();

      // speech bubble
      const text = bubbleText(now);
      if (text) {
        ctx.font = "600 14px 'Pixelify Sans Variable', monospace";
        const tw = ctx.measureText(text).width;
        const bw = tw + 22, bh = 28, bx = x - bw / 2, by = y - 62;
        ctx.fillStyle = "#f4f1ff";
        roundRect(ctx, bx, by, bw, bh, 9); ctx.fill();
        ctx.beginPath(); ctx.moveTo(x - 6, by + bh - 1); ctx.lineTo(x, by + bh + 7); ctx.lineTo(x + 6, by + bh - 1); ctx.fill();
        ctx.fillStyle = "#16122a"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(text, x, by + bh / 2 + 1);
        ctx.textBaseline = "alphabetic";
      }
    }

    // What the slime says: a greeting first, then reactions to the player
    let saidAt = 0, said = "";
    const say = (t, now) => { said = t; saidAt = now; };
    function bubbleText(now) {
      if (now - startT < 4500) return "Hi! I collect coins ✦";
      if (said && now - saidAt < 1600) return said;
      return "";
    }

    function draw(now) {
      const w = cols * CELL, hgt = rows * CELL;
      ctx.clearRect(0, 0, w, hgt);

      // floor dots
      ctx.fillStyle = "rgba(180, 170, 255, 0.07)";
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++)
          if (!grid[y * cols + x]) ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 2, 2);

      // walls as chunky tiles
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++) {
          if (!grid[y * cols + x]) continue;
          const px = x * CELL + 2, py = y * CELL + 2, s = CELL - 4;
          ctx.fillStyle = "rgba(124, 108, 220, 0.16)";
          roundRect(ctx, px, py + 2, s, s - 2, 6); ctx.fill();
          ctx.fillStyle = "rgba(160, 146, 255, 0.13)";
          roundRect(ctx, px, py, s, s - 4, 6); ctx.fill();
        }

      // A* explored nodes flash, then fade
      const age = now - planT;
      if (age < 900 && plan.expanded.length) {
        const shown = reduce ? plan.expanded.length : Math.min(plan.expanded.length, Math.floor(age / 1.4));
        const alpha = 0.22 * (1 - Math.max(0, age - 350) / 550);
        ctx.fillStyle = `rgba(62, 224, 207, ${Math.max(0, alpha)})`;
        for (let k = 0; k < shown; k++) {
          const i = plan.expanded[k];
          roundRect(ctx, (i % cols) * CELL + 3, Math.floor(i / cols) * CELL + 3, CELL - 6, CELL - 6, 5); ctx.fill();
        }
      }

      // planned path as dotted trail
      if (plan.path.length > 1) {
        ctx.fillStyle = "rgba(255, 210, 63, 0.75)";
        for (let k = step + 1; k < plan.path.length; k++) {
          const i = plan.path[k];
          ctx.beginPath();
          ctx.arc((i % cols) * CELL + CELL / 2, Math.floor(i / cols) * CELL + CELL / 2, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // coins
      for (const c of coins) {
        const appear = Math.min(1, (now - c.born) / 300);
        const bob = reduce ? 0 : Math.sin(now / 300 + c.phase) * 2.5;
        const spin = reduce ? 1 : Math.abs(Math.cos(now / 420 + c.phase));
        const cx = c.x * CELL + CELL / 2, cy = c.y * CELL + CELL / 2 + bob;
        ctx.fillStyle = "rgba(255, 210, 63, 0.18)";
        ctx.beginPath(); ctx.arc(cx, cy, 14 * appear, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#ffd23f";
        ctx.beginPath(); ctx.ellipse(cx, cy, 8 * spin * appear + 0.8, 8 * appear, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "#c98a00";
        ctx.beginPath(); ctx.ellipse(cx, cy, 3.6 * spin * appear + 0.4, 3.8 * appear, 0, 0, Math.PI * 2); ctx.fill();
      }

      // cursor flag
      if (pointer && now - pointerAt < 2200 && goal) {
        const gx = goal.x * CELL + CELL / 2, gy = goal.y * CELL + CELL / 2;
        ctx.strokeStyle = "#ff6b9a"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(gx - 4, gy + 9); ctx.lineTo(gx - 4, gy - 9); ctx.stroke();
        ctx.fillStyle = "#ff6b9a";
        ctx.beginPath(); ctx.moveTo(gx - 3, gy - 9); ctx.lineTo(gx + 8, gy - 5); ctx.lineTo(gx - 3, gy - 1); ctx.fill();
      }

      drawSlime(now);

      // pickup particles and +1 text
      pops = pops.filter((p) => now - p.t < 700);
      for (const p of pops) {
        const k = (now - p.t) / 700;
        const x = p.x + p.vx * k * 18, y = p.y + p.vy * k * 18;
        if (p.text) {
          ctx.fillStyle = `rgba(255, 210, 63, ${1 - k})`;
          ctx.font = "600 14px 'Pixelify Sans Variable', monospace";
          ctx.textAlign = "center";
          ctx.fillText("+1", x, y - k * 16);
        } else {
          ctx.fillStyle = `rgba(255, 210, 63, ${1 - k})`;
          ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
        }
      }
    }

    function tick(now) {
      const following = pointer && now - pointerAt < 2200;
      if (following && !wasFollowing && now - startT > 4500) say("Coming!", now);
      wasFollowing = following;

      if (following) {
        if ((!goal || goal.x !== pointer.x || goal.y !== pointer.y) && now - lastPlan > 60) {
          lastPlan = now; replan(pointer, now);
        }
      } else if (!goal || step >= plan.path.length - 1 || !coins.some((c) => c.x === goal.x && c.y === goal.y)) {
        if (now - lastPlan > 150) { lastPlan = now; chooseCoin(now); }
      }

      if (now - moveT > STEP_MS && step < plan.path.length - 1) {
        step++;
        const i = plan.path[step];
        prev = { ...agent };
        agent = { x: i % cols, y: Math.floor(i / cols) };
        facing = { x: Math.sign(agent.x - prev.x), y: Math.sign(agent.y - prev.y) };
        moveT = now;
        if (pickup(now) && !following) goal = null;
      }

      draw(now);
      raf = requestAnimationFrame(tick);
    }

    function cellAt(e) {
      const r = canvas.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return null;
      return {
        x: Math.max(0, Math.min(cols - 1, Math.floor((e.clientX - r.left) / CELL))),
        y: Math.max(0, Math.min(rows - 1, Math.floor((e.clientY - r.top) / CELL))),
      };
    }
    function onMove(e) {
      if (e.pointerType === "touch") return;
      const c = cellAt(e);
      if (!c) { pointer = null; return; }
      pointer = nearestFree(c); pointerAt = performance.now();
    }
    function onClick(e) {
      const c = cellAt(e);
      if (!c || (c.x === agent.x && c.y === agent.y) || coins.some((o) => o.x === c.x && o.y === c.y)) return;
      grid[idx(c)] ^= 1;
      goal = null; plan = { path: [], expanded: [] };
    }

    build();
    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(tick);
    let rw = canvas.getBoundingClientRect().width;
    const ro = new ResizeObserver(() => {
      const w = canvas.getBoundingClientRect().width;
      if (Math.abs(w - rw) < 2) return; // ignore height-only changes (mobile URL bar)
      rw = w; build(); if (reduce) draw(performance.now());
    });
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="game-canvas" aria-hidden="true" />
      <div className="game-hud" aria-hidden="true">
        <span className="game-hud__coins pixel"><i className="coin" /> × {hud.coins}</span>
        <span className="game-hud__stats pixel">A* · {hud.expanded} nodes · {hud.ms.toFixed(2)}ms</span>
      </div>
    </>
  );
}
