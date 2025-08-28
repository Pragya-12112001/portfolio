import React from "react";
import { Link } from "react-router-dom";
import Me from "../../assets/pragya_samadhiya.webp";
// import Me from "../../assets/pragya.jpeg";
import "./about.css";
import { FaHandPeace, FaRocket, FaUserGraduate, FaLaptopCode, FaPalette  } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaCodeMerge } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";

export const About = () => {
  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-img">
          <img src={Me} alt="Pragya Samadhiya" />
        </div>
        <div className="hero-text">
          <h1>
            Hey, I'm <span className="name-glow">Pragya Samadhiya</span>{" "}
            <FaHandPeace className="icon" />
          </h1>
          <p className="tagline">
            Frontend Developer • UI/UX Designer • Creative Coder
          </p>
          <p>
            I enjoy turning ideas into digital experiences that are fast, responsive, 
            and easy to use.
          </p>
          <p>
            From interactive animations to accessible, well-structured interfaces, 
            I strive to build solutions that blend creativity with clean code.
          </p>

        </div>
      </div>

      {/* What I Do */}
      <section className="section work-section fade-up">
        <h2>What I Do</h2>
        <p>
          I craft responsive interfaces using React, JavaScript, and modern UI
          libraries. I love making the web not just usable but delightful.
        </p>
      </section>

      {/* Journey Timeline */}
      <section className="section timeline-section fade-up">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-dot"></div>
          <div className="timeline-card left">
            <h3><FaUserGraduate className="about-icon"/> Engineering Degree</h3>
            <p>
              Graduated in Computer Science and Engineering from BIT Raipur with
              a strong foundation in frontend development, UI/UX, and software testing.
            </p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-card right">
            <h3><FaLaptopCode className="about-icon"/> Internship at Skill Chase</h3>
            <p>
              Led a team of 4 to recreate complex web layouts with pixel-perfect
              accuracy, implemented Git workflows, and improved delivery speed
              through efficient sprint planning.
            </p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-card left">
            <h3><FaPalette className="about-icon"/> UI Designer at Ushma Infotech</h3>
            <p>
              Designed and developed polished digital experiences for small
              businesses, improved UI engagement by 30%, and contributed to
              responsive, user-friendly web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs & Work Style */}
      <section className="section beliefs-section fade-up">
        <div className="belief-card">
          <h2>What I Believe</h2>
            <p><MdDesignServices className="about-icon"/> Design is empathy made visible.</p>
            <p><FaCodeMerge className="about-icon"/> Code should be expressive and elegant.</p>
            <p><LuBrainCircuit className="about-icon"/> Learning never stops. Ever.</p>
        </div>
        <div className="belief-card">
          <h2>How I Work</h2>
          <p>
            I balance creativity with structure: planning carefully, iterating
            quickly, and polishing relentlessly.
          </p>
          <p>I thrive in async teams, feedback loops, and clean code culture.</p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="section cta-section fade-up">
        <p>Want to build something impactful together?</p>
        <Link to="/contact" className="cosmic-button">
          <span className="btn-text">Let's Connect</span>
          <FaRocket className="icon rocket-fly" />
        </Link>
      </div>
    </section>
  );
};
