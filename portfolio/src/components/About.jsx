import React from "react";
import "./About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container fade-in-up">
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Hello! I’m <b>Saurabh Tilak</b>, a passionate <b>Full Stack Developer</b> skilled in 
            <b> Java, Spring Boot, Node.js, React, and MySQL</b>. I have hands-on experience in 
            building <b>REST APIs</b>, <b>MVC architecture</b>, and scalable web applications.
          </p>

          <p>
            I hold a <b>BCS</b> degree from 
            <b> Dr. Babasaheb Ambedkar Marathwada University (2022 – 2025)</b> 
            with a CGPA of <b>8.30</b>.
          </p>

          <p>
            I have industry experience working as a <b>Jr. Software Developer</b> at 
            <b> Creazione Software</b> and as a <b>Full Stack Trainee</b> at <b>Giri’s Tech Hub</b>.
            My expertise includes <b>Java Backend</b>, <b>MERN Stack</b>, and <b>Database Optimization</b>.
          </p>

          <p>
            I am eager to leverage my technical skills to contribute to innovative projects and 
            grow as a professional developer.
          </p>

          <a href="#skills" className="btn">View My Skills</a>
        </div>

        <div className="about-img-container">
          <img src={profile} alt="Tilak Saurabh" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
