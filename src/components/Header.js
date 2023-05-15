import React from "react";
//images
import Logo from "../assets/pedro-logo-animado-bg-1--unscreen.gif";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="contact" to="contact">
            <img
              alt="PT: Meu nome, Pedro Palomo, dentro de um triangulo. EN: My name, Pedro Palomo inside a black triangle"
              className="w-[100px] lg:w-[150px]"
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
            <button className="btn btn-sm w-[100px] text-[12px] lg:text-[16px] lg:w-[200px] ">
              Trabalhe comigo
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
