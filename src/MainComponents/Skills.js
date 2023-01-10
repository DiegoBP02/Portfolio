import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import Wrapper from "../assets/Wrappers/Skills";

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

export default Skills;
