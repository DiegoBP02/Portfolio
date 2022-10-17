import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="section-center">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1,
  h4 {
    text-align: center;
    text-transform: none;
  }
  h1 {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  h4 {
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
  form {
    width: 600px;
    margin-bottom: 3rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inputBox {
    background: transparent;
    padding: 0.35rem 0.7rem;
    border: 2px solid #fff;
    color: white;
    width: 100%;
  }
  .box {
    float: left;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    width: 50%;
  }
  .paddingFix {
    padding-right: 0;
  }
  textarea {
    height: 10rem;
  }
  @media screen and (max-width: 480px) {
    form {
      width: auto;
    }
    h1 {
      margin-top: 3rem;
    }
  }
`;

export default Contact;
