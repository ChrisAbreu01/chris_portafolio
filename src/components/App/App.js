import React, { useState, useEffect } from "react";
import "./App.scss";

import WOW from "wowjs";

// Components
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import Technologies from "../Technologies/Tecnologies";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const App = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);
  const [menuToggle, setMenuToggle] = useState(false);
  const [isDarkMode, setIsdarkMode] = useState(false);
  const menuHandler = () => {
    setMenuToggle(!menuToggle);
  };

  const darkModeToogle = () => {
    setIsdarkMode(!isDarkMode);
  };

  const shouldRenderAsDarkMode = isDarkMode ? "dark-mode" : "clear-mode";
  const useNoScroll = menuToggle ? "no-scroll" : "";
  return (
    <div className={`App ${useNoScroll} ${shouldRenderAsDarkMode}`}>
      <Header
        menuHandler={menuHandler}
        menuToggle={menuToggle}
        darkModeToogle={darkModeToogle}
        isDarkMode={isDarkMode}
      />
      <Showcase isDarkMode={isDarkMode} />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
