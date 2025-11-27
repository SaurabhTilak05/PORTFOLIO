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
            Hello! I’m <b>Tilak Saurabh</b>, a passionate <b>Full Stack Java Developer</b> 
            currently pursuing my <b>MCA (Master of Computer Applications)</b> from 
            <b> Savitribai Phule Pune University</b>. With a strong foundation in <b>Java</b>, 
            <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MySQL</b>, I love 
            building scalable and efficient web applications.
          </p>

          <p>
            I have hands-on experience as a <b>Java Full Stack Intern</b> at 
            <b> G-Soft Solutions Pvt. Ltd.</b>, where I contributed to developing RESTful APIs 
            using <b>Spring Boot</b> and <b>React.js</b> for modern web systems. 
            I also trained as a <b>Full Stack Development Trainee</b> at 
            <b> Giri’s Tech Hub Pvt. Ltd.</b>, mastering end-to-end development and best coding practices.
          </p>

          <p>
            My projects — including the <b>Online Job Portal (Quick Start Career)</b> and 
            <b> Employee Management System</b> — reflect my expertise in REST API development, 
            database integration, and modern UI design. I’m deeply interested in backend architecture, 
            API optimization, and crafting seamless user experiences.
          </p>

          <p>
            As a motivated fresher, I aim to leverage my technical skills and problem-solving mindset 
            to contribute to innovative projects and grow as a professional developer.
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
