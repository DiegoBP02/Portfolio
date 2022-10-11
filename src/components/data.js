import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
export const links = [
  {
    id: 1,
    url: "#nav",
    text: "Início",
  },
  {
    id: 2,
    url: "#about",
    text: "Sobre",
  },
  {
    id: 3,
    url: "#skills",
    text: "Habilidades",
  },
  {
    id: 4,
    url: "#projects",
    text: "Projetos",
  },
  {
    id: 5,
    url: "#contact",
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
