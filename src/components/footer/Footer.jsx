import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="footer">
      {/* <a href="#" className="footer__logo">
        Rushabh
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rushabhrathod7/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rushabhrathod7" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Rushabh2442" target="_blank">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small></small>
      </div>
    </footer>
  );
};

export default Footer;
