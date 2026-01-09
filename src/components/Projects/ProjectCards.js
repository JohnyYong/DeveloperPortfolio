import React, { useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiFigma, SiGoogledrive } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi"; 
import { Row, Col } from "react-bootstrap";

function ProjectCards(props) {
  const hasHardSkills = Array.isArray(props.skills) && props.skills.length > 0;
  const hasSoftSkills = Array.isArray(props.softSkills) && props.softSkills.length > 0;
  const showAnySkills = hasHardSkills || hasSoftSkills;

  const softSkillLimit = typeof props.softSkillLimit === "number" ? props.softSkillLimit : 6;
  const [showAllSoftSkills, setShowAllSoftSkills] = useState(false);

  const softSkillsToShow = useMemo(() => {
    if (!hasSoftSkills) return [];
    if (showAllSoftSkills) return props.softSkills;
    return props.softSkills.slice(0, softSkillLimit);
  }, [hasSoftSkills, props.softSkills, showAllSoftSkills, softSkillLimit]);

  const remainingSoftSkills = hasSoftSkills
    ? Math.max(0, props.softSkills.length - softSkillsToShow.length)
    : 0;

  const styles = {
    // PATCH: Added animation for the gold pulsing effect
    cardExtra: props.isFeatured ? {
      border: "4px solid #FFD700", 
      boxShadow: "0px 0px 20px 5px rgba(255, 215, 0, 0.4)",
      transform: "scale(1.01)",
      animation: "goldPulse 2s infinite ease-in-out", 
      transition: "all 0.3s ease-in-out"
    } : {},
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
    },
    sectionTitle: {
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "#ffffff",
      marginBottom: "8px",
      opacity: 0.9,
      textAlign: "center"
    },
    softSkillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px"
    },
    softSkillPill: {
      padding: "5px 9px",
      borderRadius: "999px",
      border: "1px solid rgba(10, 136, 115, 0.94)",
      color: "#ddd",
      fontSize: "0.75rem",
      lineHeight: 1.1,
      whiteSpace: "nowrap"
    },
    softSkillMoreBtn: {
      padding: "4px 10px",
      borderRadius: "999px",
      border: "1px dashed rgba(10, 136, 115, 0.94)",
      background: "transparent",
      color: "#aee7dc",
      fontSize: "0.75rem",
      cursor: "pointer"
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes goldPulse {
            0% {
              box-shadow: 0px 0px 15px 2px rgba(255, 215, 0, 0.4);
              border-color: #FFD700;
            }
            50% {
              box-shadow: 0px 0px 30px 8px rgba(255, 215, 0, 0.7);
              border-color: #FFFACD; /* Lighter gold */
            }
            100% {
              box-shadow: 0px 0px 15px 2px rgba(255, 215, 0, 0.4);
              border-color: #FFD700;
            }
          }
        `}
      </style>
      
      <Card className="project-card-view" style={styles.cardExtra}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
            {props.description}
          </Card.Text>
          
          {showAnySkills && <div style={styles.divider} />}
          
          {hasHardSkills && (
            <>
              <div style={styles.sectionTitle}>Tech / Tools</div>
              <Row style={{ justifyContent: "center", marginBottom: "12px" }}>
                {props.skills.map((skill) => (
                  <Col key={skill.label} xs={4} md={3} style={{ textAlign: "center" }}>
                    <img src={skill.src} alt={skill.label} style={styles.skillIcon} />
                    <div style={styles.skillLabel}>{skill.label}</div>
                  </Col>
                ))}
              </Row>
            </>
          )}

          {hasSoftSkills && (
            <>
              {hasHardSkills && <div style={{ ...styles.divider, margin: "12px 0" }} />}
              <div style={styles.sectionTitle}>Soft Skills</div>
              <div style={styles.softSkillWrap}>
                {softSkillsToShow.map((s) => (
                  <span key={s} style={styles.softSkillPill}>{s}</span>
                ))}
                {!showAllSoftSkills && remainingSoftSkills > 0 && (
                  <button type="button" style={styles.softSkillMoreBtn} onClick={() => setShowAllSoftSkills(true)}>
                    +{remainingSoftSkills} more
                  </button>
                )}
                {showAllSoftSkills && props.softSkills.length > softSkillLimit && (
                  <button type="button" style={styles.softSkillMoreBtn} onClick={() => setShowAllSoftSkills(false)}>
                    Show less
                  </button>
                )}
              </div>
            </>
          )}

          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.docsLink && (
            <Button variant="primary" href={props.docsLink} target="_blank" style={{ marginLeft: "10px" }}>
              <HiOutlineDocumentText /> &nbsp; Docs
            </Button>
          )}

          {props.driveLink && (
            <Button variant="primary" href={props.driveLink} target="_blank" style={{ marginLeft: "10px" }}>
              <SiGoogledrive /> &nbsp; Drive
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {props.figmaLink && (
            <Button variant="primary" href={props.figmaLink} target="_blank" style={{ marginLeft: "10px" }}>
              <SiFigma /> &nbsp; Figma
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCards;