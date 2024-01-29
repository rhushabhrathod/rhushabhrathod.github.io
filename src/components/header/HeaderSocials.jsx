import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
