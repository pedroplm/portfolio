import React from "react";

//images
import Image from "../assets/profile-pic.jpg";

//icons
import { FaGithub, FaFolderOpen, FaLinkedin } from "react-icons/fa";

//type animation
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      className="min-h-[90h] lg:min-h-[60vh] flex items-center"
      id="home"
    >
      <div class="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-5">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[40px] pb-5 font-bold leading-[0.8]">
              PEDRO <span>PALOMO</span>
            </h1>
            <div class="mb-6 text-[28px]  font-semibold leading-[1]">
              <span>Sou um </span>
              <TypeAnimation
                sequence={[
                  "Desenvolvedor Front-End",
                  2000,
                  "Desenvolvedor Back-End",
                  2000,
                ]}
                speed={10}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 text-justify max-w-lg mx-auto lg:mx-0">
              Desenvolvedor front-end (CSS3, HTML5, Javascript, React,
              Bootstrap, Tailwind), back-end (Python, Node, SQL, MongoDB).
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <a href="https://github.com/pedroplm">
                <h2 className="text-gradient btn-link">My Portfolio</h2>
              </a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/pedroplm">
                <FaGithub />
              </a>
              <a href="https://github.com/pedroplm">
                <FaFolderOpen />
              </a>
              <a href="https://www.linkedin.com/in/pedro-palomo-ti">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px]">
            <img class="rounded-full" src={Image} alt="my face" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
