import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";
import img from "../images/fotoAnime.png";
import { pr1 } from "../Components/datas";

const Project1 = () => {
  return (
    <Wrapper id="projects">
      <h1>Projetos</h1>
      <div className="section-center project">
        <div>
          <a href="https://animescomplete-reactjs.netlify.app" target="_blank">
            <img src={img} alt="" className="project-img" />
          </a>
        </div>
        <div className="project-desc">
          <p className="title">Animes Coding</p>
          <div className="icons">
            <div>
              <span>React</span>
              <span className="sec-span">CSS</span>
            </div>
            <div>
              <a
                href="https://github.com/DiegoBP02/animeReactjs-2.0"
                target="_blank"
              >
                <AiFillGithub className="icon marginRight" />
              </a>
              <a
                href="https://animescomplete-reactjs.netlify.app"
                target="_blank"
              >
                <MdMonitor className="icon" />
              </a>
            </div>
          </div>
          {pr1.map((msg) => {
            const { feat, desc } = msg;
            return (
              <>
                {feat ? <p className="feat">{feat}</p> : null}
                {desc ? <p className="desc">{desc}</p> : null}
              </>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
  }
  .project {
    display: flex;
    align-items: center;
  }
  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  span {
    background: #d23669;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: var(--radius);
    color: black;
  }
  .sec-span {
    margin-left: 0.5rem;
  }
  .project-desc {
    padding: 2rem;
  }
  .project-img {
    max-width: 60vw;
    height: 25rem;
    object-fit: cover;
    object-position: 0px 0px;
    border-radius: var(--radius);
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .icon {
    font-size: 1.5rem;
    color: white;
  }
  .marginRight {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 800px) {
    .project {
      display: flex;
      flex-direction: column;
    }
    .project-img {
      max-width: 90vw;
      height: auto;
    }
    .title {
      margin-bottom: 0;
    }
    p {
      margin-bottom: 1rem;
    }
    .icons {
      padding-bottom: 1rem;
    }
    .project-desc {
      width: 90vw;
      padding: 0;
      padding-top: 2rem;
    }
    .desc {
      margin-bottom: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .project-desc {
      padding-top: 1rem;
    }
    h1 {
      margin-bottom: 3rem;
    }
  }
`;

export default Project1;
