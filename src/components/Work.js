import React from "react";
import Card from "./Card";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//img
import Img1 from "../assets/site-barbearia.png";
import Img2 from "../assets/site-r2d2.png";
import Img3 from "../assets/palomos-shop-grid.png";
import Img4 from "../assets/site-cv-2000.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent text-center lg:text-left">
                Trabalhos
              </h2>
              <p className=" mb-16 text-center lg:text-left">
                Veja meus ultimos trabalhos, me acompanhe no LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/pedro-palomo-ti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center lg:justify-start"
              >
                <button className="btn btn-sm">Meu LinkedIn</button>
              </a>
            </div>
            {/* ---------------- Image Cards ----------------------*/}
            <a
              href="https://pedroplm.github.io/barbearia-alura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                img={Img1}
                text="Barbearia Alura"
                title="Projeto de uma barbearia"
              />
            </a>
            <a
              href="https://pedroplm.github.io/r2d-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                img={Img2}
                text="R2D-2 Open AI"
                title="Projeto de uma API"
              />
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex-1 flex flex-col md:gap-y-9 gap-y-12"
          >
            {/* ---------------- Image Cards ----------------------*/}
            <a
              href="https://pedroplm.github.io/palomos-shop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                img={Img3}
                text="Palomo's Shop"
                title="Projeto Front-end Ecommerce"
              />
            </a>
            <a
              href="https://pedroplm.github.io/MySite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card img={Img4} text="My Site" title="Projeto Web OldSchool" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
