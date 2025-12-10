import React from "react";
import { Col, Row } from "react-bootstrap";

// --- Game Programming / Engine Tech ---
import C from "../../Assets/TechIcons/C++.svg";
import Unity from "../../Assets/TechIcons/Unity.svg";
import UnrealEngine from "../../Assets/TechIcons/UE.svg";
import JSON from "../../Assets/TechIcons/json.svg"
import Lua from "../../Assets/TechIcons/lua.svg"
import CSharp from "../../Assets/TechIcons/CSharp.svg"


// --- Languages / Scripting ---
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";

// --- Web / Backend ---
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";

// --- Tools / DevOps / Backend Services ---
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import FMOD from "../../Assets/TechIcons/fmod.svg"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* --- Game / Engine --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSharp} alt="CSharp"/>
        <div className="tech-icons-text">CSharp</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Unity} alt="Unity" />
        <div className="tech-icons-text">Unity</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={UnrealEngine} alt="UE" />
        <div className="tech-icons-text">UnrealEngine</div>
      </Col>

      {/* --- Languages / Scripting --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={JSON} alt="Json" />
        <div className="tech-icons-text">Json</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Lua} alt="Lua" />
        <div className="tech-icons-text">Lua</div>
      </Col>
      {/* --- Web / Frontend / Backend --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React</div>
      </Col>

      {/* --- Tools / Backend Services --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git / Version Control</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL / Databases</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={FMOD} alt="Fmod" />
        <div className="tech-icons-text">FMOD</div>
      </Col>
    </Row>
  );
}

export default Techstack;
