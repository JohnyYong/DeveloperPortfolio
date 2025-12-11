import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtherProjectCards from "./OtherProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import RabinAI from "../../Assets/Projects/RabinAI.gif";
import GameAI from "../../Assets/Projects/HumanisticGameAI.png";
import SeamlessCarve from "../../Assets/Projects/SeamlessCarve.gif"

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
                "1) Behavior Tree & Finite State Machine - Implemented core AI decision-making systems with clean transitions and robust state handling.\n\n" +
                "2) A* Pathfinding & Heuristics - Optimized A* heavily and achieved a Top 4 ranking in a cohort-wide speed challenge by Professor Steve Rabin.\n\n" +
                "3) Terrain Analysis - Performed environment evaluation and cost-based navigation analysis to support smarter AI movement.\n\n"
              }
              ghLink="https://github.com/JohnyYong/Game-AI-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <OtherProjectCards
              imgPath={GameAI}
              isBlog={false}
              title="Humanist Game AI Research"
              description= {"A project conducted by myself along with 2 other group members, focusing on humanistic AI behavior through implementating various combinations of Game AI techniques. Major focus on the concept of [Sense -> Think -> Act]. \n\n" +
                            "Personally, I focused on the implementation of the [Sense] section of the project as well as the [Blackboard] of the AIs."
              }
              ghLink="https://github.com/JohnyYong/AIBehaviorAndInformationSharingResearch"
            />
          </Col>

            <Col md={4} className="project-card">
            <OtherProjectCards
              imgPath={SeamlessCarve}
              isBlog={false}
              title="Seamless Carving"
              description= {"A small project conducted within my group of friends on the topic of Seamless Carving, focusing on the Dynamic Programming section of the topic. \n\n" +
                            "Personally, I worked on the seamless carving implementation, visualisation, CICD of the project, as well as optimisation of the technique through flattening the array used to 1 Dimensional array."
              }
              ghLink="https://github.com/JohnyYong/AlgoAnalysis_SeamlessCarving"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OtherProjects;
