import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import pdf from "../assets/Pragya_Samadhiya_resume.pdf"
import "./navbar.css";

export const NavBar = ()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>ps</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />  
      </div>

      {/* Links Section */}
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/projects'}>projects</Link>
        <Link to={'/contact'}>connect</Link>
        <button className="buttons download-btn cta-button">
          <a href={pdf} className=""> Download resume </a>
        </button>
      </ul>
    </nav>
  )
}