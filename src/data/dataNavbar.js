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
    off: -64,
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
