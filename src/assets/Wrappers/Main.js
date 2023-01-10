import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
  }
  .right {
    margin-right: 0.5rem;
  }
  .top-p {
    margin-top: 3rem;
  }
  .img-intro {
    width: 35rem;
    height: auto;
    animation: move 4s infinite;
  }
  .intro {
    transition: var(--animation);
    transform: translateZ(0);
  }
  .btn:hover {
    background-color: #6aa3cd;
    color: var(--clr-grey-9);
  }
  @keyframes move {
    50% {
      transform: translateY(1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 820px) {
    .container {
      flex-direction: column;
    }
    .intro {
      width: 90vw;
    }
    .img-container {
      display: none;
    }
    margin-top: 1rem;
  }
  @media screen and (max-width: 480px) {
    .img-container {
      display: none;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 820px) {
    margin-top: 5rem;
  }
`;

export default Wrapper;
