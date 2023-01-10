import React from "react";
import img from "../images/ft2.png";
import { about } from "../data/dataDesc";
import Wrapper from "../assets/Wrappers/About";

const About = () => {
  return (
    <Wrapper id="about">
      <h1>Sobre mim</h1>
      <section className="section-center container">
        <header className="img">
          <img src={img} alt="dev" className="img-about" />
        </header>
        <artcle className="about-text">
          {about.map((msg, index) => {
            const { txt } = msg;
            return <p key={index}>{txt}</p>;
          })}
        </artcle>
      </section>
    </Wrapper>
  );
};

export default About;
