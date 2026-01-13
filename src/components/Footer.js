import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container
      fluid
      className="footer"
      style={{
        padding: "10px 0",
        fontSize: "0.8rem",
      }}
    >
      <Row>
        <Col md="4" className="footer-copywright" style={{ fontSize: "0.8rem" }}>
          <p>Portfolio Template by Soumyajit Behera</p>
        </Col>

        <Col md="4" className="footer-copywright" style={{ fontSize: "0.8rem" }}>
          <p>© {year}</p>
        </Col>

        <Col md="4" className="footer-body">
          <ul
            className="footer-icons"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              padding: 0,
              margin: 0,
            }}
          >
            <li className="social-icons" style={{ fontSize: "1.1rem" }}>
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ fontSize: "1.1rem" }}>
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons" style={{ fontSize: "1.1rem" }}>
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons" style={{ fontSize: "1.1rem" }}>
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
