import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaBootstrap, FaCode } from "react-icons/fa";
import "./skills.css";
import { TbBrandMysql } from "react-icons/tb"
import { SiCanva, SiFigma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#06B6D4" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Java", icon: <FaJava color="#E76F00" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "SQL / MySQL", icon: <TbBrandMysql color="#4479A1" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#181717" /> },
  
];

export const Skills = () => {
  return ( 
    <section className="skills-section">
      <h2 className="skills-heading">My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, icon }) => (
          <div key={name} className="skill-card" title={name}>
            <div className="skill-icon">{icon}</div>
            <p className="skill-name">{name}</p>
          </div>
        ))}
      </div>
    </section>
  ); 
};
