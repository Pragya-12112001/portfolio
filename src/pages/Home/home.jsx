import { Link } from "react-router-dom";
import Me from "../../assets/pragya.jpeg";
import "./home.css"; 
import { Skills } from "./Skills";
import { Projects } from "../Projects/projects";
import { ExperienceSection } from "./experience/Experience";

export const Home = ()=>{
  return (
    <>
    <section className='home'>
      <div>
        <div className="intro">
          <div className="text">
            <h1>Hi, I'm </h1> 
            <span className="special-heading">pragya </span> 
            <p class="tagline">Coding by Passion 💫 <br />
              Engineering by Qualification ✨ <br />
              Problem Solver at Heart <span>❤️</span>
            </p>
          </div>
          <div className="amoeba-container">
            <img src={Me} alt="Amoeba Image" className="amoeba-img" />
          </div>  
        </div>

        <div className="buttons">
          <Link to="/projects" className="cta-button">View My Work</Link>
          <Link to="/contact" className="cta-button">Contact Me</Link>
        </div>
      </div>
    </section>
     
    <Skills />
    <Projects />
    <ExperienceSection />
    </>
  )
} 