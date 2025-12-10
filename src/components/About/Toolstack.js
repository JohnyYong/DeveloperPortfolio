import React from "react";
import { Col, Row } from "react-bootstrap";

// --- Tool Icons ---
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import PhotoShop from "../../Assets/TechIcons/PhotoShop.svg";
import Maya from "../../Assets/TechIcons/Maya.svg";
import VS from "../../Assets/TechIcons/VS2022.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Google Chrome */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Google Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      {/* Visual Studio 2022 */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={VS} alt="Visual Studio 2022" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio 2022</div>
      </Col>

      {/* Adobe Photoshop */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={PhotoShop} alt="Adobe Photoshop" className="tech-icon-images" />
        <div className="tech-icons-text">Photoshop</div>
      </Col>

      {/* Autodesk Maya */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Maya} alt="Autodesk Maya" className="tech-icon-images" />
        <div className="tech-icons-text">Autodesk Maya</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
