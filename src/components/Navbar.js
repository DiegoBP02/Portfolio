import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data/dataNavbar";
import { Link } from "react-scroll";
import Wrapper from "../assets/Wrappers/Navbar";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Wrapper id="nav" className="nav">
      <nav>
        <section className="nav-center">
          <article className="nav-header">
            <a
              href="https://github.com/DiegoBP02/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="logo">Portfolio</p>
            </a>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </article>

          <article className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text, off } = link;
                return (
                  <li key={id}>
                    <Link
                      activeClass="active"
                      smooth
                      to={url}
                      offset={off ? off : 0}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>

          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
