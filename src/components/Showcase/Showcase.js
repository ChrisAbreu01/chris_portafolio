import React from "react";
import "./Showcase.scss";
import waves from "../../images/clouds.jpg";

const Showcase = ({ isDarkMode }) => {
  const shouldUseWhiteGradiantBg = isDarkMode ? "useWhiteGradiantBg" : "";
  return (
    <div className="Showcase">
      <div className="Showcase-container ">
        <img src={waves} alt="clouds" className="showcase-background" />
        <div className="container Showcase-info">
          <h2 className="wow fadeInDown" data-wow-delay="1.2s">
            Full-Stack Developer
          </h2>
          <h1
            className="wow fadeIn"
            data-wow-delay=".5s"
            style={isDarkMode ? { color: "white" } : { color: "black" }}
          >
            Christopher Abreu
          </h1>
          <p
            className={`wow fadeIn ${shouldUseWhiteGradiantBg} text-2`}
            data-wow-delay=".5s"
          >
            As a full-stack developer, I take pride in bringing ideas to life
            through elegant, visually appealing, and intuitive designs. My
            passion for technology drives me to constantly expand my knowledge,
            and I enjoy sharing my expertise with others to achieve their goals.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1Bi136LEUdx44itEUHtuvpZhszprvdUR_"
            target="_blank"
            rel="noopener noreferrer"
            offset={-70}
            duration={500}
            className="wow fadeIn resume-btn"
            data-wow-delay=".5s"
          >
            Download Resume
          </a>
          <div id="showcaseFigure"></div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
