import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/movix.png";
import IMG2 from "../../assets/extension.png";
import IMG3 from "../../assets/addtocart.png";
import IMG4 from "../../assets/portfoliosite.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Movie Info Web App",
    github: "https://github.com/rushabhrathod7/movix_app",
    demo: "https://themovix.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Chrome Extension",
    github:
      "https://github.com/rushabhrathod7/lead-tracker-chrome-extension?tab=readme-ov-file8",
    demo: "https://www.mediafire.com/file/5yqpxr5pomj069h/extension.zip/file",
  },
  {
    id: 3,
    image: IMG3,
    title: "Add To Cart",
    github: "https://github.com/rushabhrathod7/add-to-cart-2",
    demo: "https://add-to-cart-2.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Site",
    github: "https://github.com",
    demo: "https://github.com",
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Project 5",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Project 6",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
