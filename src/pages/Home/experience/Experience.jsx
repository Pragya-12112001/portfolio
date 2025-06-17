import "./experience.css";

const experiences = [
  {
    role: "Team Leader (Frontend Intern)",
    company: "Skill Chase (via AICTE Internship)",
    duration: "Aug 2024 - Sep 2024",
    location: "Remote",
    description:
      "Cloned a complex UI design with pixel-perfect precision using HTML and Bootstrap. Implemented Git workflows for version control and optimized delivery timelines by 30%.",
    tech: ["HTML", "CSS", "Bootstrap", "Git", "GitHub"],
  },
  {
    role: "UI Designer → Web Developer",
    company: "Ushma Infotech",
    duration: "Oct 2024 - Present",
    location: "Remote",
    description:
      "Started as a UI Designer and transitioned into a Web Developer role. Redesigned components to cut design revisions by 20%, conducted manual UI/UX testing, and built responsive, SEO-friendly web pages to boost user engagement by 30%.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Git"],
  },
];


export const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-top">
              <h3 className="experience-role">{exp.role}</h3>
              <span className="experience-company">@ {exp.company}</span>
            </div>
            <div className="experience-meta">
              <span>{exp.duration}</span>
              <span>{exp.location}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="experience-tech">
              {exp.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
