import React from "react";
import SingleProjectComponent from "../components/SingleProject";
import {
  firstProjectReact,
  secondProjectReact,
  thirdProjectReact,
} from "../data/dataProjects";

const Portfolio = () => {
  return (
    <article id="projects">
      <SingleProjectComponent data={firstProjectReact} />
      <SingleProjectComponent data={secondProjectReact} />
      <SingleProjectComponent data={thirdProjectReact} />
    </article>
  );
};

export default Portfolio;
