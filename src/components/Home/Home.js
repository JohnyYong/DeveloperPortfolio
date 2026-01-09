import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";
import Snowfall from "../Snowfall";

import ProjectCoverflow from "../Projects/ProjectCoverflow";
import grabity from "../../Assets/Projects/GrabityTitle.gif";
import AzureVania from "../../Assets/Projects/AzureVania.gif";
import Obelisk from "../../Assets/Projects/Obelisk.png";

import C from "../../Assets/TechIcons/C++.svg";
import FMod from "../../Assets/TechIcons/fmod.svg";
import OpenGL from "../../Assets/TechIcons/OpenGL.svg";
import VS from "../../Assets/TechIcons/VS2022.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import PhotoShop from "../../Assets/TechIcons/PhotoShop.svg";
import Lua from "../../Assets/TechIcons/Lua.svg";
import CSharp from "../../Assets/TechIcons/CSharp.svg";
import Unity from "../../Assets/TechIcons/Unity.svg";
import Forge from "../../Assets/TechIcons/ForgeNetworking.png";
import Oculus from "../../Assets/TechIcons/Oculus.svg";
import PlayStation from "../../Assets/TechIcons/PlayStation.svg";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const featuredProjects = [
    {
      imgPath: grabity,
      isBlog: false,
      isFeatured: true,
      title: "Grabity",
      description:
        "Grabity is a physics-driven top-down survival game built on our team's custom game engine. This project was my second experience working in a larger team of 9 members, where I served as the Product Manager.\n\n" +
        "I led the core gameplay development and implemented the Audio System, Tag/Layer Manager, as well as the Game Object Factory along with it's Entity Component System architecture. The user interface of the engine is done by ImGui",
      ghLink: "https://github.com/JohnyYong/Grabity",
      docsLink: "https://johnyyong.github.io/GrabityDocumentation/",
      skills: [
        { src: C, label: "C++" },
        { src: FMod, label: "FMod" },
        { src: OpenGL, label: "OpenGL" },
        { src: VS, label: "VS2022" },
        { src: vsCode, label: "VSCode" },
        { src: PhotoShop, label: "Photoshop" },
        { src: Lua, label: "Lua" },
      ],
      softSkills: [
        "Team Leadership",
        "Cross-discipline Communication",
        "Scope Management",
        "Rapid Iteration",
        "Problem Solving",
        "Task Prioritization",
      ],
      softSkillLimit: 5,
    },
    {
      imgPath: AzureVania,
      isBlog: false,
      isFeatured: true,
      title: "AzureVania",
      description:
        "A 2D mini Metroidvania Unity game project conducted a group of 4 including myself in 2020. Experimented in the usage of multiplayer networking through the Forge Networking package. My role in the project include handling Multiplayer Networking, Level Design and Enemy AIs.",
      ghLink: "https://github.com/JohnyYong/AzureVania",
      skills: [
        { src: CSharp, label: "C#" },
        { src: Unity, label: "Unity" },
        { src: PhotoShop, label: "Photoshop" },
        { src: Forge, label: "Forge Networking" },
        { src: VS, label: "VS2022" },
        { src: vsCode, label: "VSCode" },
      ],
      softSkills: [
        "Multiplayer Systems Thinking",
        "Team Collaboration",
        "Technical Communication",
        "Problem Solving",
        "Iterative Development",
        "Responsibility Ownership",
      ],
      softSkillLimit: 5,
    },
    {
      imgPath: Obelisk,
      isBlog: false,
      isFeatured: true,
      title: "Obelisk",
      description:
        "Obelisk was my Final Year Project and first major interdisciplinary collaboration, developed over 3 months in VR. Initially built for PlayStation 4 VR, the team pivoted to Oculus Quest due to COVID-19. \n\n" +
        "As Team Leader and Programming Lead, I guided technical direction and artist coordination, contributing Oculus VR integration, grid-based interaction, VR input handling, and custom shaders.\n\n",      
      driveLink: "https://drive.google.com/drive/u/0/folders/14Y1LOmjX-xWqlVCej7PvYdkGI0lrqGw8",
      demoLink: "https://www.youtube.com/playlist?list=PL9g68ppKwXMmE_Nh0aGJ9Th2hFns0YCvn",
      skills: [
        { src: CSharp, label: "C#" },
        { src: Unity, label: "Unity" },
        { src: PhotoShop, label: "Photoshop" },
        { src: Oculus, label: "Oculus VR" },
        { src: PlayStation, label: "PlayStation4 Devkit" },
        { src: VS, label: "VS2022" },
        { src: vsCode, label: "VSCode" },
      ],
      softSkills: [
        "Technical Leadership",
        "Cross-Disciplinary Collaboration",
        "Scope & Risk Management",
        "Adaptability",
        "Production Planning",
        "Decision-Making",
      ],
    },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Snowfall />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome to my page!{" "}
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name"> JOHNY YONG JUN SIANG</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Featured Projects Section */}
      <Container style={{ marginTop: "50px" }}>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Notable <strong className="cyan">Game Works</strong>
        </h1>
        <ProjectCoverflow projects={featuredProjects} />
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/JohnyYong" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/johnyyong/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;