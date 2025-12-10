import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="cyan">Johny Yong Jun Siang</span>{" "}
            from <span className="cyan">Singapore</span>.
            <br />
            I’m currently pursuing a{" "}
            <span className="cyan">
              B.Sc. (Hons) in Interactive Media &amp; Game Development
            </span>{" "}
            at{" "}
            <span className="cyan">
              Singapore Institute of Technology / DigiPen Institute of Technology
            </span>
            .
            <br />
            <br />
            I’m a{" "}
            <span className="cyan">game programmer</span> with over{" "}
            <span className="cyan">5 years of academic and project experience</span>{" "}
            in C, C++, and C#, building games and tools in{" "}
            <span className="cyan">Unity, Unreal, and custom engines</span> across{" "}
            PC, VR, console, and mobile.
            I enjoy designing{" "}
            <span className="cyan">game AI systems, pathfinding, and behavior logic</span>{" "}
            that make worlds feel responsive and alive.
            <br />
            <br />
            Outside of coding and engine work, I stay inspired through:
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
            "Build systems that are fun to play, smart under the hood, and meaningful to the player."
          </p>
          <footer className="blockquote-footer">Johny</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
