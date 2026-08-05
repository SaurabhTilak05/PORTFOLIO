import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "Dec 2025 – Present",
      role: "Software Developer",
      company: "Sparken IT Solution, Pune",
      tech: "Client projects: GoTax, eCashbook",
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
      company: "Creazione Software, Pune",
      tech: "Spring Boot • React.js • MySQL • REST APIs • Node.js • JWT • Nodemailer",
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
      company: "Giri’s TECH HUB Pvt. Ltd., Pune",
      tech: "Core Java • Spring Boot • Node.js • React.js • MySQL • REST APIs",
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
                <p className="exp-tech">{exp.tech}</p>
                <p className="exp-label">Responsibilities</p>
                <ul className="exp-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="exp-label">Key Achievements</p>
                <ul className="exp-list">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
