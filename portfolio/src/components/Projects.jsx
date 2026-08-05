import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import diwaliImg from "../assets/diwali.png";

function Projects() {
  const projects = [
    {
      title: "Online Job Portal (Quick Start Career)",
      description:
        "A full-stack job portal with role-based access for Job Seekers, HR, and Admin. Built with secure REST APIs, MySQL integration, and a responsive React UI.",
      tech: "Spring Boot • React.js • MySQL • Node.js • Express.js • JWT • Nodemailer",
      features: [
        "Role-based modules (Seeker, HR, Admin)",
        "Secure REST APIs & authentication",
        "Email notifications & live deployment",
      ],
      liveLink: "https://quickstartcareer.in/",
      github: "https://github.com/SaurabhTilak05/OnlineJobPortalApplication",
    },
    {
      title: "Jewelry Shop Management System",
      description:
        "Desktop application for daily inventory, billing, and sales operations. Deployed on the client's local system for real business use.",
      tech: "Electron.js • React.js • Node.js • Express.js • MySQL",
      features: [
        "Invoice generation & sales history",
        "Product, customer & payment management",
        "Standalone desktop deployment",
      ],
      github: "https://github.com/SaurabhTilak05",
    },
    {
      title: "Car Racing Pro",
      description:
        "High-performance racing game built with React & HTML5 Canvas. Features a custom game engine (requestAnimationFrame), responsive touch controls, and immersive audio.",
      tech: "React.js • HTML5 Canvas • CSS • JavaScript",
      features: [
        "Custom canvas game loop",
        "Touch-friendly controls",
        "Audio & responsive gameplay",
      ],
      liveLink: "https://saurabhtilak05.github.io/carracingreact/",
      github: "https://github.com/SaurabhTilak05/carracingreact",
    },
    {
      title: "Employee Management System",
      description:
        "Full-stack employee management app with CRUD operations, Spring Boot REST APIs, React UI, and MySQL via JDBC. Follows MVC with validation and error handling.",
      tech: "Spring Boot • Spring MVC • React.js • MySQL • JDBC • REST API • Postman",
      features: [
        "CRUD employee records",
        "MVC layer separation",
        "API testing with Postman",
      ],
      github: "https://github.com/SaurabhTilak05/EmployeeManagementSystem",
    },
    {
      title: "Diwali Celebration Website",
      description:
        "A colorful React-based festive website featuring glowing diyas, interactive lights, and smooth animations to celebrate Diwali.",
      tech: "React.js • CSS • Animation",
      features: [
        "Interactive festive visuals",
        "Smooth CSS animations",
        "Responsive layout",
      ],
      image: diwaliImg,
      liveLink: "https://saurabhtilak05.github.io/Diwali_Project/",
      github: "https://github.com/SaurabhTilak05/Diwali_Project",
    },
    {
      title: "Student Record Management System",
      description:
        "Console-based Java application using file handling for maintaining student details with CRUD operations and object-oriented design.",
      tech: "Java • File Handling • OOPs",
      features: [
        "CRUD with file storage",
        "OOP-based design",
        "Console workflow",
      ],
      github: "https://github.com/SaurabhTilak05/Student-Record-Management",
    },
    {
      title: "Spring Boot REST API Development",
      description:
        "Developed RESTful APIs using Spring Boot and MySQL for structured CRUD operations, data validation, and integration testing with Postman.",
      tech: "Spring Boot • MySQL • REST API • Maven",
      features: [
        "Structured CRUD endpoints",
        "Data validation",
        "Postman integration testing",
      ],
      github: "https://github.com/SaurabhTilak05/spring-boot-crud-app-database",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container fade-in-up">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-scroll">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              {p.image && (
                <div className="project-image-wrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="tech-stack">{p.tech}</span>
                {p.features && (
                  <ul className="project-features">
                    {p.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                )}
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
