import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import BackgroundLayer from "./BackgroundLayer";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <BackgroundLayer image="exp1.jpg" position="center 38%" eager />
      <div className="container hero-container fade-in-up">
        <h1>
          Hi, I'm <span className="highlight">Tilak Saurabh</span>
        </h1>

        <p className="hero-title">Java Backend Developer | Full Stack Developer</p>

        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            2000,
            "Java Backend Developer ☕",
            2000,
            "MERN Stack Developer 🚀",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p className="intro-text">
          Java Developer with hands-on experience designing and developing web
          applications using Core Java, Spring Boot, Spring MVC, REST APIs, and
          MySQL. Strong foundation in OOP, Data Structures, SQL, and the SDLC.
          Focused on building scalable, high-performance software and
          contributing to real-world product teams.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn" download>
            Download Resume
          </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/SaurabhTilak05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-tilak-502ab6350/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:saurabhtilak05@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
