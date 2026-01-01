import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "May 2025 – Nov 2025",
      role: "Jr. Software Developer (Intern / Project Trainee)",
      company: "Creazione Software, Pune",
      details:
        "Worked on a real-time Online Job Portal. Developed RESTful APIs using Node.js, Express.js, and MySQL. Implemented JWT authentication and Nodemailer for notifications. Built responsive UI using React.js and Bootstrap.",
    },
    {
      year: "Aug 2024 – Apr 2025",
      role: "Full Stack Development Trainee",
      company: "Giri’s Tech Hub Pvt. Ltd., Pune",
      details:
        "Completed Java Full Stack training covering Core Java, OOP, Spring Boot, REST APIs, and MySQL. Built backend applications using Spring Boot and tested APIs with Postman. Developed responsive frontend using React.js.",
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
