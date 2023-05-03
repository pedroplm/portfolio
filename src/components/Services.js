import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  const servicesData = [
    {
      name: "Front end web development",
      description:
        "Desenvolvimentos de paginas web, usando ferramentas como Javascrip, HTML5, CSS, Bootstrap, Tailwind e React",
      link: "Mais sobre",
    },
    {
      name: "Back end development",
      description:
        "Estruturação de tabelas, banco de dados (experiencia em MongoDB e SQL), interação entre o site e o servidor usando Node,",
      link: "Mais sobre",
    },
    {
      name: "Web Design",
      description: "Desenvolvimento e aplicação de designs web",
      link: "Mais sobre",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container mx-auto mb-[20px]">
        <div className="flex flex-col lg:flex-row">
          {/* text and image */}
          <div className="flex-1  mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 lg:text-left text-center">
              O que eu faço?
            </h2>
            <h3 className="h3 max-w-[455px] sm:max-w-full mb-16 text-left lg:text-left text-center ">
              Sou um estudante de front-end, procurando minha primeira
              oportunidade de emprego.
            </h3>
            <button className="btn btn-sm mx-auto">Meus Projetos</button>
          </div>
          {/* services*/}
          <div className="flex-1">
            {/* service list */}
            <div>
              {servicesData.map((service, index) => {
                // destructure
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-5">
                        {name}
                      </h4>
                      <p className="leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="https://pedroplm.github.io/r2d-2/"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="https://github.com/pedroplm"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
