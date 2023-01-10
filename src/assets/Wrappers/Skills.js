import styled from "styled-components";

const Wrapper = styled.article`
  h1 {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .stack {
    font-size: 5rem;
    margin: 1.5rem 2.5rem;
  }
  .html {
    color: #e44d26;
  }
  .css {
    color: #0070ba;
  }
  .js {
    color: #0070ba;
  }
  .react {
    color: #61dbfb;
  }
  .node {
    color: #80bd41;
  }
  .mongodb {
    color: #4fb23e;
  }
  @media screen and (max-width: 480px) {
    h1 {
      max-width: 90vw;
      margin: 3rem auto 1rem auto;
    }
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Wrapper;
