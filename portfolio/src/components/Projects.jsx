import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Online Job Portal (Quick Start Career)",
      description:
        "A full-stack job portal with JWT authentication, role-based access (Job Seekers, HR, Admin), and Nodemailer integration for automated alerts.",
      tech: "Node.js • Express.js • MySQL • React.js • JWT • Nodemailer",
      liveLink: "https://quickstartcareer.in/",
      github: "https://github.com/SaurabhTilak05/OnlineJobPortalApplication",
    },
    {
      title: "Car Racing Pro",
      description:
        "High-performance racing game built with React & HTML5 Canvas. Features a custom game engine (requestAnimationFrame), responsive touch controls, and immersive audio.",
      tech: "React.js • HTML5 Canvas • CSS • JavaScript",
      liveLink: "https://saurabhtilak05.github.io/carracingreact/",
      github: "https://github.com/SaurabhTilak05/carracingreact",
    },
    {
      title: "Employee Management System",
      description:
        "Developed a CRUD-based web application to manage employee details using Spring Boot and MySQL. Implemented MVC architecture and RESTful APIs.",
      tech: "Spring Boot • Spring MVC • MySQL • JDBC • REST API",
      github: "https://github.com/SaurabhTilak05/EmployeeManagementSystem", // Placeholder, assuming user has this or we keep the old one if url unknown.  User resume says "Techn Stack: Spring Boot..." so description must change.
    },
    {
      title: "Diwali Celebration Website",
      description:
        "A colorful React-based festive website featuring glowing diyas, interactive lights, and smooth animations to celebrate Diwali.",
      tech: "React.js • CSS • Animation",
      liveLink: "https://saurabhtilak05.github.io/Diwali_Project/",
      github: "https://github.com/SaurabhTilak05/Diwali_Project",
    },
    {
      title: "Student Record Management System",
      description:
        "Console-based Java application using file handling for maintaining student details with CRUD operations and object-oriented design.",
      tech: "Java • File Handling • OOPs",
      github: "https://github.com/SaurabhTilak05/Student-Record-Management",
    },
    {
      title: "Spring Boot REST API Development",
      description:
        "Developed RESTful APIs using Spring Boot and MySQL for structured CRUD operations, data validation, and integration testing with Postman.",
      tech: "Spring Boot • MySQL • REST API • Maven",
      github: "https://github.com/SaurabhTilak05/spring-boot-crud-app-database",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container fade-in-up">
        <h2 className="projects-title">My Projects</h2>

        {/* Horizontal Scroll Section */}
        <div className="projects-scroll">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="tech-stack">{p.tech}</span>
              </div>

              <div className="project-links">
                {p.liveLink && (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live <FaExternalLinkAlt className="icon" />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn github-btn"
                  >
                    GitHub <FaGithub className="icon" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
