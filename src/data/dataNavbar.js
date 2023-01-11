import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  {
    id: 1,
    url: "main",
    text: "Início",
  },
  {
    id: 2,
    url: "about",
    text: "Sobre",
    off: -64,
  },
  {
    id: 3,
    url: "skills",
    text: "Habilidades",
    off: -200,
  },
  {
    id: 4,
    url: "projects",
    text: "Projetos",
    off: -200,
  },
  {
    id: 5,
    url: "contact",
    text: "Contato",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/diego-batista-291637235/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/DiegoBP02",
    icon: <AiFillGithub />,
  },
];

export const about = [
  {
    id: 1,
    txt:
      "Meu nome é Diego Batista, tenho 18 anos e estou estudando para me tornar um Desenvolvedor FullStack.",
  },
  {
    id: 2,
    txt:
      "O escopo das minhas habilidades é majoritariamente desenvolvimento no frontend, baseando-se no desenvolvimento web utilizando React. Além disso, tenho experiência em HTML, CSS e JavaScript.",
  },
  {
    id: 3,
    txt:
      "Estou sempre aberto a me adaptar e trabalhar em novas habilidades e tecnologias.",
  },
];
