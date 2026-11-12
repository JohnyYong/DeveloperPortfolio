import { useEffect, useState } from "react";
import HeroGame from "./HeroGame";
import Media from "./Media";
import {
  profile, roles, stats, pillars, featured, projects, categories, questLog, loadout, sideQuests, comingSoon,
} from "../data";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
  </svg>
);

/* ---------------- Nav ---------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [["Games", "#games"], ["More", "#more"], ["Quest log", "#quests"], ["About", "#about"], ["Contact", "#contact"]];
  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo pixel">JY</span>
          <span className="nav__name">Johny Yong</span>
        </a>
        <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a className="btn btn--small" href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
        </nav>
      </div>
    </header>
  );
}

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="role" aria-live="polite">
      <span key={i} className="role__text">{roles[i]}</span>
      <span className="role__caret" aria-hidden="true" />
    </span>
  );
}

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section className="hero" id="top">
      <HeroGame />
      <div className="hero__fade" />
      <div className="wrap hero__content">
        <p className="hero__player pixel reveal"><span className="blink">▶</span> PLAYER 1 · {profile.location.toUpperCase()}</p>
        <h1 className="hero__title reveal">
          Hi, I'm Johny<span className="bang">!</span>
        </h1>
        <p className="hero__class reveal"><span className="pixel muted">CLASS:</span> <RotatingRole /></p>
        <p className="hero__lead reveal">
          I'm a game programmer who loves design just as much. I build the engines and AI underneath a game,
          then fuss over the levels, combat and little moments that make it <em>fun</em>.
        </p>
        <div className="hero__cta reveal">
          <a className="btn btn--start" href="#games"><span className="pixel">▶</span> Press start</a>
          <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
        <div className="hero__tip reveal">
          <span className="hero__tip-badge pixel">TIP</span>
          That slime runs real A* pathfinding I wrote. Lead it with your cursor, or let it hunt coins on its own. Click tiles to build walls!
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats + pillars ---------------- */
export function Stats() {
  return (
    <section className="intro">
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat reveal">
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <div key={p.title} className={`pillar pillar--${p.color} reveal`}>
              <span className="pillar__icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Links({ links }) {
  return (
    <div className="links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link">
          {l.label} <Arrow />
        </a>
      ))}
    </div>
  );
}
function Tags({ items, color }) {
  return (
    <ul className={`tags ${color ? `tags--${color}` : ""}`}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
function SectionHead({ world, title, sub }) {
  return (
    <div className="section__head reveal">
      <p className="world pixel">{world}</p>
      <h2 className="section__title">{title}</h2>
      {sub && <p className="section__sub">{sub}</p>}
    </div>
  );
}

/* ---------------- Featured games ---------------- */
export function Featured() {
  return (
    <section className="section" id="games">
      <div className="wrap">
        <SectionHead world="WORLD 1 · FEATURED" title="Games I've helped bring to life" sub="What I designed, what I coded, and what each game was about." />
        <div className="cases">
          {featured.map((p, i) => (
            <article key={p.id} className={`case case--${p.color} reveal ${i % 2 ? "case--flip" : ""}`}>
              <div className="case__visual">
                <span className="case__level pixel">LV.{i + 1}</span>
                <Media image={p.image} video={p.video} alt={`${p.title} preview`} className="case__media" />
              </div>
              <div className="case__body">
                <p className="case__tagline">{p.tagline}</p>
                <h3 className="case__title">{p.title}</h3>
                <ul className="meta">
                  {p.meta.map((m) => <li key={m}>{m}</li>)}
                </ul>
                <p className="case__idea">{p.idea}</p>
                <p className="case__role"><span className="pixel">ROLE</span> {p.role}</p>
                <div className="case__split">
                  {p.design.length > 0 && (
                    <div>
                      <h4 className="split__head split__head--pink pixel">✦ Design</h4>
                      <ul className="case__list">{p.design.map((c) => <li key={c}>{c}</li>)}</ul>
                    </div>
                  )}
                  <div>
                    <h4 className="split__head split__head--cyan pixel">⌨ Code</h4>
                    <ul className="case__list">{p.code.map((c) => <li key={c}>{c}</li>)}</ul>
                  </div>
                </div>
                <Tags items={p.tech} />
                <Links links={p.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- More projects ---------------- */
export function Projects() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const list = projects.filter((p) => cat === "All" || p.category === cat);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active]);

  const catColor = (c) => ({ Games: "yellow", "Game Design": "pink", "AI & Tech": "cyan" }[c] || "cyan");

  return (
    <section className="section section--alt" id="more">
      <div className="wrap">
        <SectionHead world="WORLD 2 · SIDE LEVELS" title="Experiments, prototypes & side quests" />
        <div className="filters" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={`chip ${cat === c ? "is-on" : ""}`} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid">
          {list.map((p) => (
            <button key={p.id} className={`card card--${catColor(p.category)}`} onClick={() => setActive(p)}>
              <Media image={p.image} video={p.video} alt={`${p.title} preview`} className={`card__media ${p.contain ? "media--contain" : ""}`} />
              <div className="card__body">
                <p className="card__cat pixel">{p.category}{p.period ? ` · ${p.period}` : ""}</p>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__summary">{p.summary}</p>
                <span className="card__more">Open <Arrow /></span>
              </div>
            </button>
          ))}
          {(cat === "All" || cat === "AI & Tech") && (
            <div className="card card--locked" aria-label="Coming soon">
              <div className="locked__art" aria-hidden="true">
                <span className="locked__lock">🔒</span>
                <span className="locked__q pixel">? ? ?</span>
              </div>
              <div className="card__body">
                <p className="card__cat pixel">Coming soon</p>
                <h3 className="card__title">{comingSoon.title}</h3>
                <p className="card__summary">{comingSoon.text}</p>
                <ul className="tags tags--lime">{comingSoon.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {active && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Close" onClick={() => setActive(null)}>✕</button>
            <Media image={active.image} video={active.video} alt={active.title} className={`modal__media ${active.contain ? "media--contain" : ""}`} />
            <div className="modal__body">
              <p className={`card__cat pixel card__cat--${catColor(active.category)}`}>{active.category}{active.period ? ` · ${active.period}` : ""}</p>
              <h3 className="case__title">{active.title}</h3>
              <p className="case__idea">{active.summary}</p>
              <ul className="case__list">{active.details.map((d) => <li key={d}>{d}</li>)}</ul>
              {active.note && <p className="modal__note"><span className="pixel">NOTE</span> {active.note}</p>}
              <Tags items={active.tech} />
              {active.links.length > 0 && <Links links={active.links} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- Quest log + loadout ---------------- */
export function Quests() {
  return (
    <section className="section" id="quests">
      <div className="wrap two-col">
        <div>
          <SectionHead world="QUEST LOG" title="Where I've been" />
          <ol className="quests">
            {questLog.map((q, i) => (
              <li key={q.title} className="quest reveal">
                <span className={`quest__marker ${i < 2 ? "is-work" : ""}`} aria-hidden="true">{i < 2 ? "★" : "✎"}</span>
                <p className="quest__period pixel">{q.period}</p>
                <h3 className="quest__title">{q.title}</h3>
                <p className="quest__org">{q.org}</p>
                <p className="quest__text">{q.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionHead world="LOADOUT" title="What I bring to the party" />
          <div className="loadout">
            {loadout.map((s) => (
              <div key={s.group} className="loadout__group reveal">
                <h4 className={`pixel loadout__head loadout__head--${s.color}`}>{s.group}</h4>
                <Tags items={s.items} color={s.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="wrap">
        <SectionHead world="CHARACTER SHEET" title="A bit about me" />
        <div className="about">
          <div className="about__text reveal">
            <p className="about__big">
              I'm Johny, a game developer from Singapore studying Interactive Media &amp; Game Development at
              DigiPen / SIT.
            </p>
            <p>
              I've been making games for 5+ years in C, C++ and C#, in Unity, Unreal and engines I've built with
              my teammates. I love the technical side, but what really gets me going is the moment a system
              clicks and the game becomes <em>fun</em>.
            </p>
            <p>
              I'm happiest working between programmers, artists and designers, and I've led teams of up to
              nine. I speak English and Mandarin fluently.
            </p>
            <blockquote className="quote">
              “Humanity's greatest gift doesn't lie in what we know, but in our ability to learn and overcome
              whatever we face.”
            </blockquote>
          </div>
          <div className="sheet reveal">
            <div className="portrait">
              <img src={profile.photo} alt="Johny Yong" className="portrait__img" loading="lazy" />
              <span className="portrait__tag pixel">P1</span>
              <div className="portrait__hp" aria-hidden="true">
                <span className="pixel">HP</span><i><b /></i>
              </div>
            </div>
            <div className="sheet__row"><span className="pixel muted">NAME</span><span>{profile.fullName}</span></div>
            <div className="sheet__row"><span className="pixel muted">CLASS</span><span>Programmer / Designer</span></div>
            <div className="sheet__row"><span className="pixel muted">GUILD</span><span>DigiPen · SIT</span></div>
            <div className="sheet__row"><span className="pixel muted">HOME</span><span>{profile.location}</span></div>
            <div className="sheet__row"><span className="pixel muted">LANG</span><span>English · Mandarin</span></div>
            <h4 className="sheet__head pixel">SIDE QUESTS</h4>
            <ul className="side">
              {sideQuests.map((s) => (
                <li key={s.text}><span aria-hidden="true">{s.icon}</span> {s.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <section className="contact" id="contact">
      <div className="wrap contact__inner reveal">
        <p className="world pixel">NEW CHALLENGER APPROACHING</p>
        <h2 className="contact__title">Join my party?</h2>
        <p className="contact__lead">
          Need someone to build the systems, make the game fun, or both? I'd love to hear about it.
        </p>
        <div className="contact__actions">
          <a className="btn btn--start" href={`mailto:${profile.email}`}>Say hi ✉</a>
          <button className="btn btn--ghost" onClick={copy}>{copied ? "Copied! ✓" : profile.email}</button>
        </div>
        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">Résumé <Arrow /></a>
        </div>
      </div>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span className="pixel">THANKS FOR PLAYING ♥</span>
      </footer>
    </section>
  );
}
