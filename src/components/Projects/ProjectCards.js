import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiFigma, SiGoogledrive } from "react-icons/si";
import { Row, Col } from "react-bootstrap";

function ProjectCards(props) {

  // --- Inline styles ---
  const styles = {
    divider: {
      borderTop: "1px solid rgba(10, 136, 115, 0.94)",
      margin: "16px 0"
    },
    skillIcon: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
      marginBottom: "4px"
    },
    skillLabel: {
      fontSize: "0.75rem",
      color: "#ddd"
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Description */}
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.description}
        </Card.Text>

        {/* Divider */}
        {props.skills && <div style={styles.divider} />}

        {/* Skills Section */}
        {props.skills && (
          <Row style={{ justifyContent: "center", marginBottom: "12px" }}>
            {props.skills.map((skill) => (
              <Col
                key={skill.label}
                xs={4}
                md={3}
                style={{ textAlign: "center" }}
              >
                <img
                  src={skill.src}
                  alt={skill.label}
                  style={styles.skillIcon}
                />
                <div style={styles.skillLabel}>{skill.label}</div>
              </Col>
            ))}
          </Row>
        )}

        {/* GitHub Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Google Drive Button */}
        {props.driveLink && (
          <Button
            variant="primary"
            href={props.driveLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiGoogledrive /> &nbsp;
            Drive
          </Button>
        )}

        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}

        {/* Figma Button */}
        {props.figmaLink && (
          <Button
            variant="primary"
            href={props.figmaLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiFigma /> &nbsp;
            Figma
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
