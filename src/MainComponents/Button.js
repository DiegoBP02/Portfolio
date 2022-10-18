import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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

const Wrapper = styled.div`
  .link {
    font-size: 2.5rem;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    background: var(--clr-secondary);
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-radius: var(--radius);
    color: var(--clr-grey-9);
    animation: bounce 2s ease-in-out infinite;
    visibility: hidden;
  }
  @media screen and (max-width: 800px) {
    .show-link {
      visibility: visible;
      z-index: 100;
    }
  }
`;
