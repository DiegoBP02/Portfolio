import React from "react";
import styled from "styled-components";
import img from "../images/ft2.png";
import { about } from "../Components/datas";

const About = () => {
  return (
    <Wrapper id="about">
      <h1>Sobre mim</h1>
      <div className="section-center container">
        <div className="img">
          <img src={img} alt="dev" className="img-about" />
        </div>
        <div className="about-text">
          {about.map((msg, index) => {
            const { txt } = msg;
            return <p key={index}>{txt}</p>;
          })}
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
  h1 {
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
