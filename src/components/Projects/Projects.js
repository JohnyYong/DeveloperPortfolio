import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Snowfall from "../Snowfall"
import grabity from "../../Assets/Projects/GrabityTitle.gif";
import Knossos from "../../Assets/Projects/DungeonOfKnossos.png";
import ReflectionAfterTheEnd from "../../Assets/Projects/ReflectionAfterTheEnd.png"
import BattleMania from "../../Assets/Projects/BattleMania.gif"
import AzureVania from "../../Assets/Projects/AzureVania.gif"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Snowfall />
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Knossos}
              isBlog={false}
              title="Dungeon Of Knossos"
              description={
                "Dungeon Of Knossos is a quick 2D top down roguelike game made in Unity where I tested the mechanics of Procedural Generation on rooms. Up to 30 rooms will be generated everytime the level is restarted and the dungeon has its difficulty scaled such that the enemies nearer to the spawn are easier.\n\n"
                 + "The art assets within the game are all done by yours truly"
              }
              ghLink="https://github.com/JohnyYong/DungeonOfKnossos"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReflectionAfterTheEnd}
              isBlog={false}
              title="Reflection After The End"
              description={
                "Reflection After The End is a small 3D game project which I experimented using Unreal Engine. The player awakens in a mysterious court suspended between life and death, where they must prove their worthiness to ascend to Heaven or fall into Hell. Guided by a divine Judge, the player must uncover three key memories tied to their past—each housed in a location twisted by denial and guilt. Through puzzles and symbolic tasks, they confront the truths they once buried. In the end, they must return to the courthouse, where judgment is passed—either by their own words or by someone they wronged."
              }
              ghLink="https://github.com/JohnyYong/ReflectionAfterTheEnd"
              demoLink="https://drive.google.com/file/d/1e6QFiiWt70sOMYA3uGe2WXDk386Qgy9Z/view?usp=drive_link"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AzureVania}
              isBlog={false}
              title="AzureVania"
              description={
                "A 2D mini Metroidvania Unity game project conducted a group of 4 including myself in 2020. Experimented in the usage of multiplayer networking through the Forge Networking package. My role in the project include handling Multiplayer Networking, Level Design and Enemy AIs."
              }
              ghLink="https://github.com/JohnyYong/AzureVania"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BattleMania}
              isBlog={false}
              title="BattleMania"
              description={
                "An independent work project done in 2020 which I attempted to study how 2D fighting games are made. Melee combat hitboxes were explored, as well as further experimenting on the Multiplayer Networking aspect of games, this time attempted using Photon Networking package. Art assets are not done and not owned by myself."
              }
              ghLink="https://github.com/JohnyYong/BattleMania"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
