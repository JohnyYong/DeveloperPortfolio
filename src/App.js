import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
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
  const [load, upadateLoad] = useState(true);
  const [showIntro, setShowIntro] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds change

    return () => clearTimeout(introTimer);
  }, []);

  return (
    <Router>
      {/* existing preloader */}
      <Preloader load={load} />

      {/* NEW: intro overlay on top of everything */}
      {showIntro && (
        <div className="intro-screen">
          <img src={introGif} alt="Intro" className="intro-gif" />
        </div>
      )}

      <div className="App" id={load ? "no-scroll" : "scroll"}>
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
