import React from "react";
import styled from "styled-components";
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <h1>
        <h1>Minhas habilidades</h1>
      </h1>
      <div className="section-center container">
        <div className="stack">
          <DiHtml5 className="html" />
        </div>
        <div className="stack">
          <DiCss3 className="css" />
        </div>
        <div className="stack">
          <DiJavascript className="js" />
        </div>
        <div className="stack">
          <DiReact className="react" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .stack {
    font-size: 5rem;
    margin: 1.5rem 3rem;
  }
  .html {
    color: #e44d26;
  }
  .css {
    color: #0070ba;
  }
  .js {
    color: #0070ba;
  }
  .react {
    color: #61dbfb;
  }
  @media screen and (max-width: 480px) {
    h1 {
      max-width: 90vw;
      margin: 3rem auto 1rem auto;
    }
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Skills;
