import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7dmigv",
        "template_7xlzvhb",
        form.current,
        "XIuk4ha9lL-cW9uXH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="lg:section py-16" id="contact">
      <script src="https://smtpjs.com/v3/smtp.js"></script>
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
          <form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Nome"
              name="user_name"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="E-mail"
              name="user_email"
            />
            <textarea
              placeholder="Mensagem"
              name="message"
              className="mb-12 resize-none bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            ></textarea>
            <input
              className="btn btn-lg"
              type="submit"
              value="Enviar Mensagem"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
