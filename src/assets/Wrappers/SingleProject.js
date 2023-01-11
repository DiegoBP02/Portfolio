import styled from "styled-components";

const Wrapper = styled.article`
  h1 {
    text-align: center;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
  }
  .project {
    display: flex;
    align-items: center;
  }
  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  span {
    background: #d23669;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: var(--radius);
    color: black;
    margin-left: 0.5rem;
  }
  span:first-child {
    margin-left: 0;
  }
  .project-desc {
    padding: 2rem;
  }
  .project-img {
    max-width: 60vw;
    height: 25rem;
    object-fit: cover;
    object-position: 0px 0px;
    border-radius: var(--radius);
  }
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .icon {
    font-size: 1.5rem;
    color: white;
  }
  .marginRight {
    margin-right: 0.5rem;
  }
  .reverse-row {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 820px) {
    .project {
      display: flex;
      flex-direction: column;
    }
    .project-img {
      max-width: 90vw;
      height: auto;
    }
    .title {
      margin-bottom: 0;
    }
    p {
      margin-bottom: 1rem;
    }
    .icons {
      padding-bottom: 1rem;
    }
    .project-desc {
      width: 90vw;
      padding: 0;
      padding-top: 2rem;
    }
    .desc {
      margin-bottom: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .project-desc {
      padding-top: 1rem;
    }

    .reverse-row {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
