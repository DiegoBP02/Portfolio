import React from "react";
import styled from "styled-components";
import img from "../images/ft2.png";

const About = () => {
  return (
    <Wrapper id="about">
      <p className="title">
        <h1>Sobre mim</h1>
      </p>
      <div className="section-center container">
        <div className="img">
          <img src={img} alt="dev" className="img-about" />
        </div>
        <div className="about-text">
          <p>
            Meu nome é Diego Batista, tenho 18 anos e estou estudando para me
            tornar um Desenvolvedor FullStack.
          </p>
          <p>
            O escopo das minhas habilidades é majoritariamente desenvolvimento
            no frontend, baseando-se no desenvolvimento web utilizando React.
            Além disso, tenho experiência em HTML, CSS e JavaScript.
          </p>
          <p>
            Estou sempre aberto a me adaptar e trabalhar em novas habilidades e
            tecnologias.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    margin-top: 3rem;
    justify-content: space-evenly;
    align-items: center;
  }
  .title h1 {
    margin-top: 3rem;
    text-align: center;
  }
  .about-text {
    width: 35vw;
  }
  .img-about {
    width: 35rem;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .about-text {
      width: 90vw;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0;
    }
    .img-about {
      max-width: 90vw;
    }
    .about-text {
      width: 90vw;
    }
  }
`;

export default About;
