import React from "react";
import Wrapper from "../assets/Wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        Feito por <span>Diego Batista</span> &bull; {new Date().getFullYear()}
      </h5>
    </Wrapper>
  );
};

export default Footer;
