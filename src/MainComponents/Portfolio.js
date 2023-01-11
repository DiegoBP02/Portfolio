import React from "react";
import { useState } from "react";
import SingleProjectComponent from "../components/SingleProject";
import { projectsReact, projectsNode, projectMERN } from "../data/dataProjects";

const Portfolio = () => {
  const techs = ["React", "Node", "MERN"];

  const [selectTech, setSelectTech] = useState(techs[0]);

  const handleChange = (e) => {
    setSelectTech(e.target.value);
  };

  let project;
  switch (selectTech) {
    case "React":
      project = <SingleProjectComponent data={projectsReact} />;
      break;
    case "Node":
      project = <SingleProjectComponent data={projectsNode} />;
      break;
    case "MERN":
      project = <SingleProjectComponent data={projectMERN} />;
      break;
    default:
      project = <SingleProjectComponent data={projectsReact} />;
  }

  return (
    <article>
      <header>
        <h1 className="titleProjects">My Projects</h1>
        <div className="btns">
          {techs.map((tech, index) => {
            return (
              <button
                type="button"
                onClick={handleChange}
                value={tech}
                key={index}
                className={`${selectTech === tech ? "active" : null}`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </header>
      <section id="projects">{project}</section>
    </article>
  );
};

export default Portfolio;
