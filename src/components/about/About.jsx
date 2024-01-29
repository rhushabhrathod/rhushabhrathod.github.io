import React from "react";
import "./about.css";
import ME from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" draggable="false" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <PiCertificateDuotone className="about__icon" />
              <h5>Certifications</h5>
              <small>5+ Achieved</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            Aspiring frontend developer proficient in HTML, CSS, JavaScript and
            Node JS with a strong focus on React for building dynamic and
            interactive user interfaces.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
