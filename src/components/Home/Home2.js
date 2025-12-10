import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHO AM <span className="cyan"> I </span>?
            </h1>
            <p className="home-about-body">
              I’m a <b className="cyan">Game Programmer</b> who loves building
              systems, tools, and gameplay experiences from the ground up.  
              Most of my work revolves around designing engines, solving
              performance challenges, and creating mechanics that feel great to play.
              <br />
              <br />
              I specialise in 
              <i>
                <b className="cyan"> C++, C#, Unity, OpenGL, and Gameplay Systems </b>
              </i>
              — with strong experience in engine architecture, ECS design,
              AI behaviour, and editor tools.
              <br />
              <br />
              My key interests include developing  
              <i>
                <b className="cyan"> Games, AI Systems, Procedural Generation, </b>
              </i>
              and anything that pushes technical creativity forward.
              <br />
              <br />
              I’ve built projects ranging from  
              <b className="cyan"> PC Games, VR Games, A* pathfinding optimizers, </b>  
              to <b className="cyan">full C++/OpenGL engines with ImGui editors </b>
              and <b className="cyan">top-down action combat systems</b>.
              <br />
              <br />
              I love making games feel responsive, polished, and performant —
              and I’m always exploring new techniques to improve my craft.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
