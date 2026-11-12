import { useEffect } from "react";
import { Nav, Hero, Stats, Featured, Projects, Quests, About, Contact } from "./components/Sections";

export default function App() {
  // Fade sections in as they scroll into view
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Featured />
        <Projects />
        <Quests />
        <About />
        <Contact />
      </main>
    </>
  );
}
