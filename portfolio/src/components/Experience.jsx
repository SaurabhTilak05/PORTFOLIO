import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "June 2025 – Present",
      role: "Java Developer Intern",
      company: "Gsoft Solutions Pvt. Ltd.",
      details:
        "Contributing to backend development using Java, Spring Boot, and MySQL. Working on real-time projects involving RESTful API design, debugging, and performance optimization.",
    },
    {
      year: "2024 – 2025",
      role: "Full Stack Developer (Academic Project)",
      company: "Quick Start Career",
      details:
        "Developed an Online Job Portal web application using React.js, Node.js, Express, and MySQL. Implemented REST APIs, job posting modules, and dynamic candidate dashboards as part of MCA academic project.",
    },
    {
      year: "2024 – 2025",
      role: "Java Full Stack Development Trainee",
      company: "Giri’s Tech Hub Pvt. Ltd., Pune",
      details:
        "Trained in Full Stack Java Development with hands-on experience in Core Java, Spring Boot, React.js, and REST API implementation. Gained exposure to complete project lifecycle and version control using Git & GitHub.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container fade-in-up">
        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <span className="year">{exp.year}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
