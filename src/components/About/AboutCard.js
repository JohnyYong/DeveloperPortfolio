import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="cyan">Johny Yong Jun Siang</span> from{" "}
            <span className="cyan">Singapore</span>.
            <br />
            I’m currently pursuing a{" "}
            <span className="cyan">
              B.Sc. (Hons) in Interactive Media &amp; Game Development
            </span>{" "}
            at{" "}
            <span className="cyan">
              Singapore Institute of Technology / DigiPen Institute of Technology
            </span>
            , where I focus on building gameplay systems, tools, and polished game
            experiences.
            <br />
            <br />
            I’m a <span className="cyan">game programmer</span> who loves turning ideas
            into interactive, responsive systems. Over the past{" "}
            <span className="cyan">5+ years</span>, I’ve worked extensively with{" "}
            <span className="cyan">C, C++, and C#</span>, creating games in{" "}
            <span className="cyan">Unity, Unreal, and custom-built engines</span>—from
            physics-based shooters to AI-driven behavior systems.  
            <br />
            I enjoy the challenge of designing{" "}
            <span className="cyan">
              smart game AI, fluid animations, and clean gameplay tools
            </span>{" "}
            that make each project feel alive and enjoyable to build.
            <br />
            <br />
            Outside of coding and engine tinkering, I stay inspired through:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Japanese Role-Playing Games (JRPGs) and
              analyzing their design 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and automation to enhance creative workflows 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels &amp; self-improvement books 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing different cultures 🌏
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Humanity's greatest gift doesn't lies in the knowledge they know, but their ability to learn and overcome whatever they have faced."
          </p>
          <footer className="blockquote-footer">Johny Yong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
