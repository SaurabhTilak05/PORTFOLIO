import React from "react";
import "./Experience.css";
import { FaBriefcase, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import BackgroundLayer from "./BackgroundLayer";

const experiences = [
  {
    year: "Dec 2025 – Present",
    role: "Software Developer",
    company: "Sparken IT Solution",
    location: "Pune",
    current: true,
    accent: "#00c9a7",
    tech: ["GoTax", "eCashbook", "Client Delivery"],
    responsibilities: [
      "Implemented business validation logic and workflow enhancements based on client requirements.",
      "Developed reusable components and improved existing modules for better maintainability.",
      "Participated in requirement analysis, code reviews, testing, and deployment activities.",
      "Troubleshot production issues while ensuring minimal impact on users.",
      "Worked closely with QA and business teams to deliver timely, high-quality releases.",
    ],
    achievements: [
      "Contributed to continuous improvement by identifying and fixing performance and usability issues.",
    ],
  },
  {
    year: "May 2025 – Nov 2025",
    role: "Junior Software Developer",
    company: "Creazione Software",
    location: "Pune",
    accent: "#6c63ff",
    tech: ["Spring Boot", "React.js", "MySQL", "REST APIs", "Node.js", "JWT", "Nodemailer"],
    responsibilities: [
      "Developed and maintained a full-stack Online Job Portal (Quick Start Career) using Spring Boot, React.js, and MySQL.",
      "Designed secure RESTful APIs for Job Seeker, HR, and Admin modules.",
      "Built responsive UI with React.js, HTML, CSS, and JavaScript.",
      "Integrated MySQL with backend services and optimized queries for performance.",
      "Collaborated using GitHub, Postman, and Agile practices across development and testing.",
    ],
    achievements: [
      "Delivered a live production portal at quickstartcareer.in with role-based access and notifications.",
    ],
  },
  {
    year: "Aug 2024 – May 2025",
    role: "Full Stack Development Trainee",
    company: "Giri’s TECH HUB Pvt. Ltd.",
    location: "Pune",
    accent: "#3b82f6",
    tech: ["Core Java", "Spring Boot", "Node.js", "React.js", "MySQL", "REST APIs"],
    responsibilities: [
      "Completed training covering Core Java, OOP, Spring Boot, Node.js, JavaScript, MySQL, Collections, Multithreading, and REST APIs.",
      "Developed full-stack applications with Spring Boot, Node.js, React.js, and MySQL.",
      "Designed RESTful APIs and integrated frontend with backend modules.",
      "Applied OOP and Collections Framework for maintainable Java applications.",
      "Built responsive UIs with HTML, CSS, JavaScript, and React.js.",
    ],
    achievements: [
      "Gained hands-on experience across backend, frontend integration, debugging, and version control with Git.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <BackgroundLayer image="exp.jpg" position="center 28%" />
      <div className="container fade-in-up">
        <h2 className="section-title">Experience</h2>
        <p className="experience-intro">
          A timeline of roles where I built full-stack products, shipped client features, and grew as a software developer.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.year}`}
              className={`experience-card${exp.current ? " is-current" : ""}`}
              style={{ "--accent": exp.accent }}
            >
              <span className="experience-marker" aria-hidden="true">
                <FaBriefcase />
              </span>

              <div className="experience-card-inner">
                <header className="experience-header">
                  <div className="experience-meta">
                    <span className="experience-year">{exp.year}</span>
                    {exp.current && <span className="experience-badge">Current</span>}
                  </div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">
                    {exp.company}
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </p>
                </header>

                <div className="experience-tech">
                  {exp.tech.map((item) => (
                    <span key={item} className="experience-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="experience-body">
                  <div className="experience-block">
                    <h4>Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-highlight">
                    <h4>
                      <FaTrophy /> Key Achievement
                    </h4>
                    {exp.achievements.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
