import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave-divider" />

      {/* Watermark Text */}
      <div className="footer-watermark">Pragya</div>

      {/* Floating blurred blob */}
      <div className="blur-bg" />

      <div className="footer-content">
        <h2 className="footer-title">Let's Create Beautiful Things ✨</h2>
        <p className="footer-subtitle">Design. Code. Dream. Repeat.</p>

        <div className="footer-icons">
          <a href="https://github.com/Pragya-12112001" target="_blank" rel="noreferrer">
            <FaGithub className="footer-icon float" />
          </a>
          <a href="https://www.linkedin.com/in/pragya-samadhiya-a36625242/" target="_blank" rel="noreferrer">
            <FaLinkedin className="footer-icon float" />
          </a>
          <a href="mailto:samadhiyapragya75@gmail.com">
            <FaEnvelope className="footer-icon float" />
          </a>
          {/* <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FaFileAlt className="footer-icon float" />
          </a> */}
        </div>

        <p className="footer-note">© {new Date().getFullYear()} Pragya Samadhiya • Coded with 🍩 & 🎧</p>
      </div>
    </footer>
  );
};

