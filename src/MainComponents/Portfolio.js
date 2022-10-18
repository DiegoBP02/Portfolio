import React from "react";
import SingleProjectComponent from "../Projects/SingleProjectComponent";
import {
  dataProject1,
  dataProject2,
  dataProject3,
} from "../Projects/dataProjects";

const Portfolio = () => {
  return (
    <div id="projects">
      <SingleProjectComponent data={dataProject1} />
      <SingleProjectComponent data={dataProject2} />
      <SingleProjectComponent data={dataProject3} />
    </div>
  );
};

export default Portfolio;
