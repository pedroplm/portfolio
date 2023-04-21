import React from "react";

//images
import Image from "../assets/profile-pic.jpg";

//icons
//import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";

//type animation
import { TypeAnimation } from "react-type-animation";

//motion
//import { motion } from "framer-motion";

//variants
//import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div class="container mx-auto">
        <div>
          <h1 class="font-semibold">
            Olá, sou Pedro <span>Palomo,</span>
          </h1>
          <div class="mb-6 text-[24px]  font-semibold leading">
            <TypeAnimation
              sequence={[
                "Desenvolvedor Front-End",
                2000,
                "Desenvolvedor Back-End",
                2000,
                "Estudante de Programação",
                2000,
              ]}
              speed={10}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p>
            Desenvolvedor front-end (CSS3, HTML5, Javascript, React, Bootstrap,
            Tailwind), back-end (Python, Node, SQL, MongoDB).
          </p>
          <div></div>
        </div>
        <div>
          <img class="rounded-full" src={Image} alt="my face" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
