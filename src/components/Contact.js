import React from "react";

const Contact = () => {
  return (
    <section className="lg:section py-16" id="contact">
      <div class="container mx-auto">
        <div className="flex flex-col">
          {/* text */}
          <div>
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Entre em contato
              </h4>
              <h2 className="text-[45px] lg:text-[80px] leading-none mb-12 mr-5">
                Vamos trabalhar juntos
              </h2>
            </div>
          </div>
          {/* form */}
          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6">
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Nome"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="E-mail"
            />
            <textarea
              placeholder="Mensagem"
              className="mb-12 resize-none bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            ></textarea>
            <button className="btn btn-lg">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
