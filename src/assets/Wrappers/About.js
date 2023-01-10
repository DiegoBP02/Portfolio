import styled from "styled-components";

const Wrapper = styled.article`
  .container {
    display: flex;
    margin-top: 3rem;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 {
    margin-top: 3rem;
    text-align: center;
  }
  .about-text {
    width: 35vw;
  }
  .img-about {
    width: 35rem;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .about-text {
      width: 90vw;
    }
  }
  @media screen and (max-width: 480px) {
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0;
    }
    .img-about {
      max-width: 90vw;
    }
    .about-text {
      width: 90vw;
    }
  }
`;

export default Wrapper;
