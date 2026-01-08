import React from "react";
import { Col, Row } from "react-bootstrap";

// --- Game Programming / Engine Tech ---
import C from "../../Assets/TechIcons/C++.svg";
import CSharp from "../../Assets/TechIcons/CSharp.svg";
import FMod from "../../Assets/TechIcons/fmod.svg";
import OpenGL from "../../Assets/TechIcons/OpenGL.svg";
import Unity from "../../Assets/TechIcons/Unity.svg";
import Unreal from "../../Assets/TechIcons/UE.svg";
import Photon from "../../Assets/TechIcons/Photon.svg"
import Python from "../../Assets/TechIcons/Python.svg"
import Forge from "../../Assets/TechIcons/ForgeNetworking.png"

// --- Web / Scripting ---
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import JSONIcon from "../../Assets/TechIcons/JSON.svg";
import Lua from "../../Assets/TechIcons/Lua.svg"

// --- Tools / DevOps / Cloud ---
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Oculus from "../../Assets/TechIcons/Oculus.svg"
import PlayStation from "../../Assets/TechIcons/PlayStation.svg"
import AndroidStudio from "../../Assets/TechIcons/AndroidStudio.svg"

function Techstack() {

  // --- INLINE CSS (no external file needed) ---
  const styles = {
    iconContainer: {
      textAlign: "center",
      marginBottom: "24px"
    },
    icon: {
      width: "60px",
      height: "60px",
      objectFit: "contain",
      display: "block",
      margin: "0 auto 8px"
    },
    label: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#ffffff"
    }
  };

  const techItems = [
    { src: C, label: "C++" },
    { src: CSharp, label: "C#" },
    { src: Python, label: "Python" },
    { src: FMod, label: "FMOD" },
    { src: OpenGL, label: "OpenGL" },
    { src: Unity, label: "Unity" },
    { src: Unreal, label: "Unreal Engine" },
    { src: Javascript, label: "JavaScript" },
    { src: JSONIcon, label: "JSON" },
    { src: Node, label: "Node.js" },
    { src: ReactIcon, label: "React.js" },
    { src: Firebase, label: "Firebase" },
    { src: Git, label: "Git" },
    { src: SQL, label: "SQL" },
    { src: Oculus, label: "Oculus VR" },
    { src: PlayStation, label: "PlayStation DevKit" },
    { src: AndroidStudio, label: "Android Studio" },
    { src: Photon, label: "Photon Networking" },
    { src: Forge, label: "Forge Networking" },
    { src: Lua, label: "Lua" },


  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item) => (
        <Col key={item.label} xs={4} md={2} style={styles.iconContainer}>
          <img src={item.src} alt={item.label} style={styles.icon} />
          <div style={styles.label}>{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
