import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
  FaBootstrap 
} from "react-icons/fa";
import { SiFirebase, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaBootstrap  />, name: "Bootstrap" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaNodeJs />, name: "Node JS" },
    { icon: <SiMongodb />, name: "MongoDB" },
  ];

  return (
    <section id="Skills" className="skills-section">
      <h2 className="skills-title ">What I Do</h2>
      <p className="skills-subtitle">
        I'm a front-end developer focused on building clean, responsive and
        user-friendly interfaces.
      </p>

      <div className="skills-grid">
        {skills.map((item, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{item.icon}</div>
            <p className="skill-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
