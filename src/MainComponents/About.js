import React from "react";
import { programmer2 } from "../assets/images";
import { about } from "../data/dataNavbar";
import Wrapper from "../assets/Wrappers/About";

const About = () => {
  return (
    <Wrapper id="about">
      <h1>Sobre mim</h1>
      <section className="section-center container">
        <header className="img">
          <img src={programmer2} alt="dev" className="img-about" />
        </header>
        <article className="about-text">
          {about.map((msg, index) => {
            const { txt } = msg;
            return <p key={index}>{txt}</p>;
          })}
        </article>
      </section>
    </Wrapper>
  );
};

export default About;
