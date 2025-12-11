import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtherProjectCards from "./OtherProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import RabinAI from "../../Assets/Projects/RabinAI.gif";
import bitsOfCode from "../../Assets/Projects/blog.png";

function OtherProjects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Non Game related works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <OtherProjectCards
              imgPath={RabinAI}
              isBlog={false}
              title="Game AI Project"
              description={
                "A technical Game AI project consisting of three major assignments:\n\n" +
                "1) Behavior Tree & Finite State Machine — Implemented core AI decision-making systems with clean transitions and robust state handling.\n" +
                "2) A* Pathfinding & Heuristics — Optimized A* heavily and achieved a Top 4 ranking in a cohort-wide speed challenge by Professor Steve Rabin.\n" +
                "3) Terrain Analysis — Performed environment evaluation and cost-based navigation analysis to support smarter AI movement.\n\n" +
                "The project culminated in a guided personal tour by Steve Rabin for the Top 4 performers."
              }
              ghLink="https://github.com/JohnyYong/Game-AI-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <OtherProjectCards
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <OtherProjectCards
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OtherProjects;
