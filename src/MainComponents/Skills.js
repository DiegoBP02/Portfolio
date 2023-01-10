import React from "react";
import styled from "styled-components";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <h1>Minhas habilidades</h1>
      <section className="section-center container">
        <article className="stack">
          <DiHtml5 className="html" />
        </article>
        <article className="stack">
          <DiCss3 className="css" />
        </article>
        <article className="stack">
          <DiJavascript className="js" />
        </article>
        <article className="stack">
          <DiReact className="react" />
        </article>
        <article className="stack">
          <DiNodejsSmall className="node" />
        </article>
        <article className="stack">
          <DiMongodb className="mongodb" />
        </article>
      </section>
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
    margin: 1.5rem 2.5rem;
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
  .node {
    color: #80bd41;
  }
  .mongodb {
    color: #4fb23e;
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
