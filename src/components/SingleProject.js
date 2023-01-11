import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";
import SingleProject from "./Description";
import Wrapper from "../assets/Wrappers/SingleProject";

const SingleProjectComponent = ({ data }) => {
  return data.map((singleData) => {
    const {
      ref,
      refLive,
      image,
      title,
      spans,
      projectData,
      reverse,
    } = singleData;

    return (
      <Wrapper>
        <div
          className={
            reverse
              ? "section-center project reverse-row"
              : "section-center project"
          }
        >
          <div>
            <a href={refLive} target="_blank" rel="noopener noreferrer">
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
                <a href={refLive} target="_blank" rel="noopener noreferrer">
                  <MdMonitor className="icon" />
                </a>
              </div>
            </div>
            <SingleProject data={projectData} />
          </div>
        </div>
      </Wrapper>
    );
  });
};

export default SingleProjectComponent;
