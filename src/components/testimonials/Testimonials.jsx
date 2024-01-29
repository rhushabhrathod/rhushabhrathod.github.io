import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/dots.png";
import AVTR2 from "../../assets/dots.png";
import AVTR3 from "../../assets/dots.png";
import AVTR4 from "../../assets/dots.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quisquam quasi vitae repellendus a voluptates hic ut facere asperiores deserunt ab debitis atque cupiditate, ducimus voluptate possimus. Asperiores, inventore facilis?",
  },
  {
    avatar: AVTR2,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quisquam quasi vitae repellendus a voluptates hic ut facere asperiores deserunt ab debitis atque cupiditate, ducimus voluptate possimus. Asperiores, inventore facilis?",
  },
  {
    avatar: AVTR3,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quisquam quasi vitae repellendus a voluptates hic ut facere asperiores deserunt ab debitis atque cupiditate, ducimus voluptate possimus. Asperiores, inventore facilis?",
  },
  {
    avatar: AVTR4,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quisquam quasi vitae repellendus a voluptates hic ut facere asperiores deserunt ab debitis atque cupiditate, ducimus voluptate possimus. Asperiores, inventore facilis?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
