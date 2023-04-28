import React from "react";

const Services = () => {
  const servicesData = [
    {
      name: "Front end web development",
      description:
        "Desenvolvimentos de paginas web, usando ferramentas como Javascrip, HTML5, CSS, Bootstrap, Tailwind e React",
      link: "Learn more about",
    },
    {
      name: "Back end development",
      description:
        "Estruturação de tabelas, banco de dados (experiencia em MongoDB e SQL), interação entre o site e o servidor usando Node,",
      link: "Learn more about",
    },
    {
      name: "Web Design",
      description: "Desenvolvimento e aplicação de designs web",
      link: "Learn more about",
    },
  ];

  return (
    <div className="section" id="services">
      Services
    </div>
  );
};

export default Services;
