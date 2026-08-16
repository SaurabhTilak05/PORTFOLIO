import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import BackgroundLayer from "./BackgroundLayer";

function Footer() {
  return (
    <footer className="footer">
      <BackgroundLayer image="contact1.jpg" position="center center" />
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="highlight">Tilak Saurabh</span> | Designed & Developed with ❤️
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/SaurabhTilak05"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:saurabhtilak05@gmail.com"
            className="icon-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
