import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OtherProjectCards from "./OtherProjectCards";
import Snowfall from "../Snowfall"
import RabinAI from "../../Assets/Projects/RabinAI.gif";
import GameAI from "../../Assets/Projects/HumanisticGameAI.png";
import SeamlessCarve from "../../Assets/Projects/SeamlessCarve.gif"

// --- Game Programming / Engine Tech ---
import C from "../../Assets/TechIcons/C++.svg";
import CSharp from "../../Assets/TechIcons/CSharp.svg";
import Unity from "../../Assets/TechIcons/Unity.svg";

// --- Tools / DevOps / Cloud ---
import vsCode from "../../Assets/TechIcons/vscode.svg";
import PhotoShop from "../../Assets/TechIcons/PhotoShop.svg";
import VS from "../../Assets/TechIcons/VS2022.svg";


function OtherProjects() {
  return (
    <Container fluid className="project-section">
      <Snowfall />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="cyan"> Non Game related works </strong>
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
              skills={[
              { src: C, label: "C++" },
              { src: VS, label: "VS2022" },
              { src: vsCode, label: "VSCode" },
              ]}
              softSkills={[
              "Algorithmic Optimization",
              "Performance Analysis",
              "Problem Decomposition",
              "Technical Experimentation",
              "Competitive Benchmarking",
              "Iterative Refinement"
            ]}
            softSkillLimit={5}
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
              skills={[
              { src: CSharp, label: "C#" },
              { src: Unity, label: "Unity" },
              { src: VS, label: "VS2022" },
              { src: PhotoShop, label: "Photoshop" },
              ]}
              softSkills={[
              "Research-Oriented Thinking",
              "Systems Design",
              "Information Modeling",
              "Collaborative Problem Solving",
              "Abstract Reasoning",
              "Technical Communication"
            ]}
            softSkillLimit={5}
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
              skills={[
              { src: C, label: "C++" },
              { src: VS, label: "VS2022" },
              ]}
              softSkills={[
              "Algorithmic Thinking",
              "Dynamic Programming Reasoning",
              "Optimization Mindset",
              "Technical Visualization",
              "Systems-Level Thinking",
              "Implementation Precision"
            ]}
            softSkillLimit={5}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default OtherProjects;
