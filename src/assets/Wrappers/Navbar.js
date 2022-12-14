import styled from "styled-components";

const Wrapper = styled.header`
  nav {
    color: var(--clr-grey-10);
    box-shadow: var(--light-shadow);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-grey-9);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: #6aa3cd;
    transform: rotate(90deg);
  }
  .logo {
    font-size: 1.5rem;
    margin-bottom: 0;
    color: var(--clr-grey-9);
    letter-spacing: var(--spacing);
    transition: var(--transition);
    cursor: pointer;
  }
  .links a {
    color: var(--clr-grey-9);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }
  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }
  .social-icons {
    display: none;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  .show-container {
    height: 10rem;
  }
  @media screen and (min-width: 800px) {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: #0006;
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    a {
      cursor: pointer;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: var(--clr-grey-9);
      transition: var(--transition);
    }
    .social-icons a:hover,
    .links a:hover,
    .logo:hover {
      color: #6aa3cd;
    }
    .active {
      color: #011a45;
      transform: scale(1.2);
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1220px) {
    .nav-center {
      width: 95vw;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 991px) {
    .nav-center {
      width: 90vw;
    }
  }
`;

export default Wrapper;
