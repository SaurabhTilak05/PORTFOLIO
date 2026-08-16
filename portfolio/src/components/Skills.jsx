import React from "react";
import "./Skills.css";
import BackgroundLayer from "./BackgroundLayer";
import {
  FaJava,
  FaJs,
  FaPhp,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaCubes,
  FaSitemap,
  FaDesktop,
  FaExchangeAlt,
  FaRobot,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiExpress,
  SiMysql,
  SiPostman,
  SiJquery,
  SiYii,
  SiJsonwebtokens,
  SiPhpmyadmin,
  SiGithubcopilot,
  SiGooglegemini,
  SiOpenai,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuMousePointer, LuWind } from "react-icons/lu";

const featuredSkills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    accent: "#00c9a7",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    accent: "#6c63ff",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "AJAX", icon: <FaExchangeAlt /> },
      { name: "Yii2", icon: <SiYii /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    accent: "#3b82f6",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring MVC", icon: <SiSpring /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaExchangeAlt /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    accent: "#22d3ee",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PHPMyAdmin", icon: <SiPhpmyadmin /> },
      { name: "MySQL Workbench", icon: <SiMysql /> },
    ],
  },
  {
    title: "Core CS",
    icon: <FaSitemap />,
    accent: "#f59e0b",
    skills: [
      { name: "DSA", icon: <FaSitemap /> },
      { name: "OOP", icon: <FaCubes /> },
      { name: "Operating Systems", icon: <FaDesktop /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    accent: "#a78bfa",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "STS", icon: <SiSpring /> },
    ],
  },
  {
    title: "AI Tools",
    icon: <FaRobot />,
    accent: "#38bdf8",
    wide: true,
    skills: [
      { name: "Cursor", icon: <LuMousePointer /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "Antigravity", icon: <SiGooglegemini /> },
      { name: "Windsurf", icon: <LuWind /> },
      { name: "Codex", icon: <SiOpenai /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <BackgroundLayer image="skill2.jpg" position="center 40%" />
      <div className="container fade-in-up">
        <h2 className="section-title">My Skills</h2>
        <p className="skills-intro">
          Technologies and tools I use to design, build, and ship full-stack applications.
        </p>

        <div className="skills-featured">
          {featuredSkills.map((skill) => (
            <div key={skill.name} className="featured-skill" title={skill.name}>
              <span className="featured-skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="skills-categories">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`skill-category${group.wide ? " skill-category-wide" : ""}`}
              style={{ "--accent": group.accent }}
            >
              <header className="skill-category-header">
                <span className="skill-category-icon">{group.icon}</span>
                <h3 className="skill-category-title">{group.title}</h3>
              </header>
              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <span className="skill-card-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
