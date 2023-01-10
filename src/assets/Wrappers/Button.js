import styled from "styled-components";

const Wrapper = styled.aside`
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

export default Wrapper;
