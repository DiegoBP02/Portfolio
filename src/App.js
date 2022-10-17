import React from "react";
import Particles from "./MainComponents/Particles";
import Navbar from "./MainComponents/Navbar";
import Main from "./MainComponents/Main";
import About from "./MainComponents/About";
import Skills from "./MainComponents/Skills";
import Portfolio from "./MainComponents/Portfolio";
import Contact from "./MainComponents/Contact";
import Footer from "./MainComponents/Footer";

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
