import React from "react";

import Logo from "../assets/pedro-logo-animado-bg-1--unscreen.gif";

import { FaGithub, FaFolderOpen, FaLinkedin } from "react-icons/fa";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="contact" to="#contact">
            <img
              alt="PT: Meu nome, Pedro Palomo, dentro de um triangulo. EN: My name, Pedro Palomo inside a triangle"
              className="w-[150px]"
              src={Logo}
            />
          </a>
          {/* button */}
          <Link
            to="contact"
            activeClass="deactive"
            smooth={true}
            spy={true}
            className="cursor-pointer bg-none flex items-center justify-center"
          >
            <button className="btn btn-sm">Trabalhe comigo</button>
          </Link>
        </div>
        <div>
          <p className="text-center"> 2023 © Pedro Palomo</p>
        </div>
        <div class="flex justify-center items-center">
          <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 my-12">
            <a
              href="https://github.com/pedroplm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://github.com/pedroplm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFolderOpen />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-palomo-ti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
