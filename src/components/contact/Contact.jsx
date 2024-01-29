import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5oz5c3k",
      "template_n67p9pe",
      form.current,
      "VA-hpDxer6MMLKKOg"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rathodrhushabh@gmail.com</h5>
            <a href="mailto:rathodrhushabh@gmail.com" target="__blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>

            <a
              href="https://www.linkedin.com/in/rushabhrathod7/"
              target="__blank"
            >
              Connect
            </a>
          </article>

          {/* <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rathodrhushabh@gmail.com</h5>
            <a href="mailto:rathodrhushabh@gmail.com" target="__blank">
              Send a message
            </a>
          </article> */}
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
