import React from "react";
import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "PHP", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Bootstrap", "HTML", "CSS", "jQuery", "AJAX", "Yii2"],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PHPMyAdmin", "MySQL Workbench"],
    },
    {
      title: "Core CS",
      skills: [
        "Data Structures & Algorithms (DSA)",
        "OOP",
        "Operating Systems",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "STS"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container fade-in-up">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I’ve learned and practiced while building my projects.
        </p>

        <div className="skills-categories">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-category">
              <h3 className="skill-category-title">{group.title}</h3>
              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-card">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
