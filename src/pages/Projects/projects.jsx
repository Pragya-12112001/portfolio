import "./projects.css";
import { FaLongArrowAltRight, FaGithub } from "react-icons/fa";
import p1 from "../../assets/projects/1.png";
import p2 from "../../assets/projects/2.png";
import p3 from "../../assets/projects/3.png";

const projects = [
  {
    title: "Amazon Clone",
    description: "An Amazon homepage clone built with HTML and CSS, featuring responsive design and minimal interactivity using basic JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://pragya-12112001.github.io/amazon-clone/",
    github: "https://github.com/Pragya-12112001/amazon-clone",
    image: p1,
    accentColor: "#FF9900", // Amazon Orange
  },
  {
    title: "User Dashboard",
    description: "A sleek and responsive user dashboard built using React and Tailwind CSS. It includes dynamic UI elements, reusable components, and a minimalist dark-mode layout.",
    tech: ["Tailwind", "React"],
    live: "https://user-dashboard-c6eh.vercel.app/",
    github: "https://github.com/Pragya-12112001/UserDashboard",
    image: p2,
    accentColor: "#06B6D4", // Tailwind Cyan
  },
  {
    title: "Post It",
    // using ejs, express, css, uuid
    description: "A simple blogging platform built with EJS, Express, and CSS. It allows users to create, read, update, and delete posts with a clean and intuitive interface.",
    tech: ["EJS", "Express", "CSS", "UUID"],
    live: "https://post-it-blogs.onrender.com/",
    github: "#",
    image: p3,
    // accentColor: "#4F46E5", // Tailwind Indigo
    // accentColor: "#10B981", // Tailwind Green
    // accentColor: "#EC4899", // Tailwind Pink
    accentColor: "#F59E0B", // Tailwind Yellow
  }
];

export const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <p className="projects-description">
        Here are a few of the projects I've built recently using modern web technologies.
        Each one focuses on design, functionality, and responsiveness.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3
                className="project-title"
                style={{ borderBottom: `2px solid ${project.accentColor}` }}
              >
                {project.title}
              </h3>
              <p className="project-description">
                {project.description.split(" ").slice(0, 20).join(" ")}
                {project.description.split(" ").length > 20 && "..."}
              </p>

              <ul className="tech-list">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    style={{
                      backgroundColor: `${project.accentColor}20`,
                      color: project.accentColor,
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: project.accentColor }}
                >
                  View Project <FaLongArrowAltRight className="arrow" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <FaGithub className="github-link"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
