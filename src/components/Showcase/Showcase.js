import React from "react";
import "./Showcase.scss";
import Wave from "react-wavify";

const Showcase = ({ isDarkMode }) => {
  const shouldUseWhiteGradiantBg = isDarkMode ? "useWhiteGradiantBg" : "";
  return (
    <div className="Showcase">
      <div className="Showcase-container ">
        <div className="Showcase-waves">
          <Wave
            fill="#1E90FF"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.2,
              points: 4,
            }}
          />
        </div>
        <div className="Showcase-waves">
          <Wave
            fill="#187DE9"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.3,
              points: 4,
            }}
          />
        </div>
        <div className="Showcase-waves">
          <Wave
            fill="#126AD2"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.4,
              points: 4,
            }}
          />
        </div>
        <div className="Showcase-waves">
          <Wave
            fill="#0C56BC"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.4,
              points: 4,
            }}
          />
        </div>
        <div className="Showcase-waves">
          <Wave
            fill="#0643A5"
            paused={false}
            options={{
              height: 80,
              amplitude: 40,
              speed: 0.4,
              points: 4,
            }}
          />
        </div>
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
            href="https://drive.google.com/file/d/1KOmGu-j5WknSuWNmdhRiqPkJRfHUS2OD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            offset={-70}
            duration={500}
            className="wow fadeIn resume-btn"
            data-wow-delay=".5s"
            style={
              isDarkMode
                ? { border: "3px solid white", color: "white" }
                : { border: "3px solid grey" }
            }
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
