import styled from "styled-components";

const Wrapper = styled.article`
  h1,
  h4 {
    text-align: center;
    text-transform: none;
  }
  h1 {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  h4 {
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
  form {
    width: 600px;
    margin-bottom: 3rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inputBox {
    background: transparent;
    padding: 0.35rem 0.7rem;
    border: 2px solid #fff;
    color: white;
    width: 100%;
  }
  .box {
    float: left;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    width: 50%;
  }
  .paddingFix {
    padding-right: 0;
  }
  textarea {
    height: 10rem;
  }
  @media screen and (max-width: 480px) {
    form {
      width: auto;
    }
    h1 {
      margin-top: 3rem;
    }
  }
`;

export default Wrapper;
