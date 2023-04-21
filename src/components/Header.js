import React from 'react';
//images
import Logo from "../assets/pedro-logo-animado-bg-unscreen.gif";


const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href = "contact">
          <img  
            alt = "PT:Meu nome, Pedro Palomo, dentro de um triangulo. EN: My name, Pedro Palomo inside a black triangle" 
            className = "w-[250px]"
            src={Logo}
          />
        </a>
        {/* button */}
        <button className='btn btn-sm'>Trabalhe comigo</button>
      </div>
    </div>
  </header>)
};

export default Header;
