import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import OtherProjects from "./components/OtherProjects/OtherProjects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import introGif from "./Assets/Intro.gif";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeDelay = 1300;  // when fade starts (ms)
    const hideDelay = 1500;  // when overlay is removed (ms)

    const fadeTimer = setTimeout(() => setIsFading(true), fadeDelay);
    const hideTimer = setTimeout(() => setShowIntro(false), hideDelay);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Router>
      {/* INTRO SCREEN */}
      {showIntro && (
        <div className={`intro-screen ${isFading ? "fade-out" : ""}`}>
          <img src={introGif} alt="Intro" className="intro-gif" />
        </div>
      )}

      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/otherproject" element={<OtherProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
