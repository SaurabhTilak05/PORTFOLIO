import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "Java", "JavaScript", "PHP", "SQL",
    "React.js", "Bootstrap", "HTML", "CSS", "jQuery", "AJAX", "Yii2",
    "Spring Boot", "Spring MVC", "Node.js", "Express.js", "REST APIs", "JWT",
    "MySQL", "MongoDB",
    "Data Structures & Algorithms (DSA)", "OOP", "Operating Systems",
    "Git", "GitHub", "Postman", "VS Code", "STS", "MySQL Workbench"
  ];

  return (
    <section id="skills" className="skills">
      <div className="container fade-in-up">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I’ve learned and practiced while building my projects.
        </p>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
