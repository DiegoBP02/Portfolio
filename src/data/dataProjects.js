import { pr1, pr2, pr3 } from "./dataDesc";
import { imgProject1, imgProject2, imgProject3 } from "../images/index";

export const firstProjectReact = {
  ref: "https://github.com/DiegoBP02/animeReactjs-2.0",
  refNetlify: "https://animescomplete-reactjs.netlify.app",
  image: imgProject1,
  title: "Animes Coding",
  spans: ["React", "CSS"],
  projectData: pr1,
  titleProject: true,
};

export const secondProjectReact = {
  ref: "https://github.com/DiegoBP02/reactComfy",
  refNetlify: "https://comfy-reactjs.netlify.app",
  image: imgProject2,
  title: "ComfySloth",
  spans: ["React", "CSS"],
  projectData: pr2,
  reverse: true,
};

export const thirdProjectReact = {
  ref: "https://github.com/DiegoBP02/jobsterReactRedux",
  refNetlify: "https://jobster-redux.netlify.app",
  image: imgProject3,
  title: "Jobster",
  spans: ["React", "CSS", "Redux"],
  projectData: pr3,
};
