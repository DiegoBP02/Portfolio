import React from "react";
import styled from "styled-components";
import img from "../images/ft1.png";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <Wrapper id="main">
      <div className="section-center container">
        <div className=" intro">
          <h5>Olá, meu nome é</h5>
          <h2>Diego Batista</h2>
          <h3>Futuro Desenvolvedor Full Stack</h3>
          <p className="top-p">
            Estou à procura de uma oportunidade como estagiário na área de TI
          </p>
          <div className="intro-project">
            <Link smooth to="projects" offset={-64} className="btn right">
              Veja meus projetos
            </Link>
          </div>
        </div>
        <div className="img-container">
          <img src={img} alt="dev" className="img-intro" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
  }
  .right {
    margin-right: 0.5rem;
  }
  .top-p {
    margin-top: 3rem;
  }
  .img-intro {
    width: 35rem;
    height: auto;
    animation: move 4s infinite;
  }
  .intro {
    transition: var(--animation);
    transform: translateZ(0);
  }
  .btn:hover {
    background-color: #6aa3cd;
    color: var(--clr-grey-9);
  }
  @keyframes move {
    50% {
      transform: translateY(1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 820px) {
    .container {
      flex-direction: column;
    }
    .intro {
      width: 90vw;
    }
    .img-container {
      display: none;
    }
    margin-top: 1rem;
  }
  @media screen and (max-width: 480px) {
    .img-container {
      display: none;
    }
  }
`;

export default Main;
