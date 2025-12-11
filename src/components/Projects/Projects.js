import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import grabity from "../../Assets/Projects/GrabityTitle.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan">Game Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grabity}
              isBlog={false}
              title="Grabity"
              description={
                "Grabity is a physics-driven top-down survival game built on our team’s custom game engine. This project was my second experience working in a larger team of 9 members, where I served as the Product Manager.\n\n"
                 + "I led the core gameplay development and implemented the Audio System, Tag/Layer Manager, as well as the Game Object Factory along with it's Entity Component System architecture. The user interface of the engine is done by ImGui"
              }
              ghLink="https://github.com/JohnyYong/Grabity"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
