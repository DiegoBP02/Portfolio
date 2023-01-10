import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Wrapper from "../assets/Wrappers/Button";

const Button = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const height = window.screen.height;
    const scrolled = window.pageYOffset;
    if (scrolled + height - 150 > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Wrapper>
      <i className={visible ? "link show-link" : "link"} onClick={scrollToTop}>
        <BsFillArrowUpCircleFill />
      </i>
    </Wrapper>
  );
};

export default Button;
