import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//icons
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiBootstrap,
} from "react-icons/si";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div>
          <h2 className="text-[36px] lg:text-[40px] pt-5 pb-5 font-bold leading-[0.8] lg:text-left text-center">
            Sobre mim
          </h2>
          <h3 className="text-[16px] lg:text-[18px]">
            Eu sou um desenvolvedor que ama tanto front-end como back-end,
            estudando para me tornar full-stack. Tenho um foco maior em
            front-end, usando tecnologias como: CSS3, HTML5, Javascript,
            bootstrap, tailwind e react. Atualmente procurando minha primeira
            oportunidade na area de desenvolvimento.
          </h3>
          <img src="" alt=""></img>
          <div>
            <h2 className="text-center text-[36px] lg:text-[40px] pt-20 font-bold leading-[0.8]">
              Skills
            </h2>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              className="skill-slider rounded-lg h-[300px]"
            >
              <div className="flex flex-col items-center justify-between content-center">
                <FaReact className="w-[50px] h-[60px] pb-2" />
                <h5>React</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <FaGithub className="w-[50px] h-[60px] pb-2" />
                <h5>Github</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <FaNodeJs className="w-[50px] h-[60px] pb-2" />
                <h5>Node</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <DiCss3 className="w-[50px] h-[60px] pb-2" />
                <h5>CSS3</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <DiHtml5 className="w-[50px] h-[60px] pb-2" />
                <h5>HTML5</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <SiTailwindcss className="w-[50px] h-[60px] pb-2" />
                <h5>Tailwind</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <SiJavascript className="w-[50px] h-[60px] pb-2" />
                <h5>Javascript</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <SiPython className="w-[50px] h-[60px] pb-2" />
                <h5>Python</h5>
              </div>
              <div className="flex flex-col items-center justify-center content-center">
                <SiBootstrap className="w-[50px] h-[60px] pb-2" />
                <h5>Bootstrap</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
