import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";
import SingleProject from "./Description";
import Wrapper from "../assets/Wrappers/SingleProject";

const SingleProjectComponent = ({ data }) => {
  const {
    ref,
    refNetlify,
    image,
    title,
    spans,
    projectData,
    reverse,
    titleProject,
  } = data;

  return (
    <Wrapper>
      <h1>{titleProject ? "Projetos" : null}</h1>
      <div
        className={
          reverse
            ? "section-center project reverse-row"
            : "section-center project"
        }
      >
        <div>
          <a href={refNetlify} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="" className="project-img" />
          </a>
        </div>
        <div className="project-desc">
          <p className="title">{title}</p>
          <div className="icons">
            <div>
              {spans.map((msg, index) => {
                return <span key={index}>{msg}</span>;
              })}
            </div>
            <div>
              <a href={ref} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="icon marginRight" />
              </a>
              <a href={refNetlify} target="_blank" rel="noopener noreferrer">
                <MdMonitor className="icon" />
              </a>
            </div>
          </div>
          <SingleProject data={projectData} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProjectComponent;
