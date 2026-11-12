import { useEffect, useRef, useState } from "react";

/*
  Live A* pathfinding demo for the hero.
  An agent walks toward the cursor (or a wandering target on touch devices),
  re-planning with A* (octile heuristic, 8-way movement, no corner cutting).
*/

const CELL = 26;
const WALL_RATE = 0.24;

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Binary min-heap keyed on f
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

export default function PathfindingCanvas() {
  const canvasRef = useRef(null);
  const [hud, setHud] = useState({ expanded: 0, length: 0, ms: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cols, rows, grid, agent, goal, plan = { path: [], expanded: [] }, step = 0;
    let raf, lastPlan = 0, lastMove = 0, revealT = 0, pointerActive = false, wanderAt = 0;
    const rand = mulberry32(7);

    const cellOf = (px, py) => ({
      x: Math.max(0, Math.min(cols - 1, Math.floor(px / CELL))),
      y: Math.max(0, Math.min(rows - 1, Math.floor(py / CELL))),
    });
    const free = (c) => !grid[c.y * cols + c.x];
    const nearestFree = (c) => {
      for (let r = 0; r < 8; r++)
        for (let dy = -r; dy <= r; dy++)
          for (let dx = -r; dx <= r; dx++) {
            const x = c.x + dx, y = c.y + dy;
            if (x >= 0 && y >= 0 && x < cols && y < rows && !grid[y * cols + x]) return { x, y };
          }
      return c;
    };
    const randomFree = () => {
      for (let k = 0; k < 200; k++) {
        const c = { x: Math.floor(rand() * cols), y: Math.floor(rand() * rows) };
        if (free(c)) return c;
      }
      return { x: 0, y: 0 };
    };

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL); rows = Math.ceil(height / CELL);
      grid = new Uint8Array(cols * rows);
      for (let i = 0; i < grid.length; i++) grid[i] = rand() < WALL_RATE ? 1 : 0;
      agent = nearestFree({ x: Math.floor(cols * 0.72), y: Math.floor(rows * 0.5) });
      goal = randomFree();
      replan(performance.now());
    }

    function replan(now) {
      const t0 = performance.now();
      plan = astar(grid, cols, rows, agent, goal);
      const ms = performance.now() - t0;
      step = 0; revealT = now;
      setHud({ expanded: plan.expanded.length, length: Math.max(0, plan.path.length - 1), ms });
    }

    function draw(now) {
      const w = cols * CELL, hgt = rows * CELL;
      ctx.clearRect(0, 0, w, hgt);
      // walls
      ctx.fillStyle = "rgba(148, 163, 184, 0.11)";
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++)
          if (grid[y * cols + x]) ctx.fillRect(x * CELL + 2, y * CELL + 2, CELL - 4, CELL - 4);
      // explored nodes reveal over time
      const shown = reduce ? plan.expanded.length : Math.min(plan.expanded.length, Math.floor((now - revealT) / 2.2));
      ctx.fillStyle = "rgba(34, 211, 238, 0.13)";
      for (let k = 0; k < shown; k++) {
        const i = plan.expanded[k];
        ctx.fillRect((i % cols) * CELL + 1, Math.floor(i / cols) * CELL + 1, CELL - 2, CELL - 2);
      }
      // path
      if (plan.path.length > 1 && shown >= plan.expanded.length) {
        ctx.strokeStyle = "rgba(34, 211, 238, 0.95)";
        ctx.shadowColor = "rgba(34, 211, 238, 0.8)"; ctx.shadowBlur = 8;
        ctx.lineWidth = 2.5; ctx.lineJoin = "round"; ctx.setLineDash([6, 6]);
        ctx.lineDashOffset = reduce ? 0 : -now / 40;
        ctx.beginPath();
        for (let k = step; k < plan.path.length; k++) {
          const i = plan.path[k];
          const px = (i % cols) * CELL + CELL / 2, py = Math.floor(i / cols) * CELL + CELL / 2;
          k === step ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.stroke(); ctx.setLineDash([]); ctx.shadowBlur = 0;
      }
      // goal
      const gx = goal.x * CELL + CELL / 2, gy = goal.y * CELL + CELL / 2;
      ctx.strokeStyle = "rgba(251, 191, 36, 0.9)"; ctx.lineWidth = 2;
      ctx.strokeRect(gx - 7, gy - 7, 14, 14);
      // agent
      const ax = agent.x * CELL + CELL / 2, ay = agent.y * CELL + CELL / 2;
      ctx.fillStyle = "rgba(34, 211, 238, 0.18)";
      ctx.beginPath(); ctx.arc(ax, ay, 12 + (reduce ? 0 : Math.sin(now / 300) * 2), 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#22d3ee";
      ctx.beginPath(); ctx.arc(ax, ay, 5.5, 0, Math.PI * 2); ctx.fill();
    }

    function tick(now) {
      const revealed = now - revealT > plan.expanded.length * 2.2;
      if (revealed && now - lastMove > 70 && step < plan.path.length - 1) {
        step++; lastMove = now;
        const i = plan.path[step];
        agent = { x: i % cols, y: Math.floor(i / cols) };
      }
      if (!pointerActive && now > wanderAt && step >= plan.path.length - 1) {
        goal = randomFree(); replan(now); wanderAt = now + 1200;
      }
      draw(now);
      raf = requestAnimationFrame(tick);
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) { pointerActive = false; return; }
      pointerActive = true;
      const c = nearestFree(cellOf(e.clientX - r.left, e.clientY - r.top));
      const now = performance.now();
      if ((c.x !== goal.x || c.y !== goal.y) && now - lastPlan > 60) {
        goal = c; lastPlan = now; replan(now);
      }
    }
    function onClick(e) {
      const r = canvas.getBoundingClientRect();
      const c = cellOf(e.clientX - r.left, e.clientY - r.top);
      if (c.x === agent.x && c.y === agent.y) return;
      grid[c.y * cols + c.x] ^= 1; // toggle wall
      replan(performance.now());
    }

    build();
    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(tick);
    const ro = new ResizeObserver(() => { build(); if (reduce) draw(performance.now()); });
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
      <canvas ref={canvasRef} className="pf-canvas" aria-hidden="true" />
      <div className="pf-hud mono" aria-hidden="true">
        <span><i className="dot cyan" /> A* · octile</span>
        <span>{hud.expanded} nodes expanded</span>
        <span>path {hud.length}</span>
        <span>{hud.ms.toFixed(2)} ms</span>
      </div>
    </>
  );
}
