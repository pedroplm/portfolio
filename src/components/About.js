import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//images
import Image from "../assets/profile-pic.jpg";
//icons
import { FaGithub, FaFolderOpen, FaLinkedin } from "react-icons/fa";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div>
          <h2 className="text-[40px] pt-5 pb-5 font-bold leading-[0.8]">
            Sobre mim
          </h2>
          <h3>
            Eu sou um desenvolvedor que ama tanto front-end como back-end,
            estudando para me tornar full-stack. Tenho um foco maior em
            front-end, usando tecnologias como: CSS3, HTML5, Javascript,
            bootstrap, tailwind e react. Atualmente procurando minha primeira
            oportunidade na area de desenvolvimento.
          </h3>
          <img src="" alt=""></img>
          <div>
            <h2 className="text-center text-[40px] pt-20 pb-5 font-bold leading-[0.8]">
              Skills
            </h2>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              className="skill-slider rounded-lg h-[400px]"
            >
              <div className="flex flex-col items-center justify-between content-center ">
                <img src={Image} alt="" className="w-[50px] rounded-lg" />
                <h5>Github</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <FaGithub />
                <h5>Github</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <FaGithub />
                <h5>Github</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <FaGithub />
                <h5>Github</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
