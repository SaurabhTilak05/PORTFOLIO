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
            Hello! I’m <b>Tilak Saurabh</b>, a passionate software developer who
            enjoys building <b>scalable web applications</b> with{" "}
            <b>Java, Spring Boot, Node.js, React, and MySQL</b>. I care about
            clean architecture, reliable REST APIs, and solutions that solve
            real business problems.
          </p>

          <p>
            I hold a <b>BCS</b> degree from{" "}
            <b>Dr. Babasaheb Ambedkar Marathwada University (2022 – 2025)</b>{" "}
            with a CGPA of <b>8.30</b>. Continuous learning and strong
            problem-solving keep me growing as an engineer.
          </p>

          <p>
            I currently work as a <b>Software Developer</b> at{" "}
            <b>Sparken IT Solution</b> on client products like{" "}
            <b>GoTax</b> and <b>eCashbook</b>. Previously I contributed as a{" "}
            <b>Junior Software Developer</b> at <b>Creazione Software</b> and as
            a <b>Full Stack Trainee</b> at <b>Giri’s Tech Hub</b>, collaborating
            with teams across development, testing, and delivery.
          </p>

          <p>
            I value teamwork, clear communication, and shipping quality software
            that makes an impact.
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
