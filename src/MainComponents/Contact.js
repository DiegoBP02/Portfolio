import React from "react";
import Wrapper from "../assets/Wrappers/Contact";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <section className="section-center">
        <h1>Entre em contato</h1>
        <h4>Deixe uma mensagem, vou respondê-lo o mais rápido possível!</h4>
        <div className="form">
          <form action="https://formspree.io/f/xgeqyjwk" method="POST">
            <div className="box">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="inputBox"
                required
              />
            </div>
            <div className="box paddingFix">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputBox"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensagem"
              required
              className="inputBox"
            ></textarea>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
