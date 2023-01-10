import React from "react";
import img from "../images/ft1.png";
import { Link } from "react-scroll";
import Wrapper from "../assets/Wrappers/Main";

const Main = () => {
  return (
    <Wrapper id="main">
      <section className="section-center container">
        <header className="intro">
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
        </header>
        <section className="img-container">
          <img src={img} alt="dev" className="img-intro" />
        </section>
      </section>
    </Wrapper>
  );
};

export default Main;
