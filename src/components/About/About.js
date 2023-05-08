import React from "react";
import chris from "../../images/me.jpeg";
import "./About.scss";
// import grayDots from "../img/gray-dots-full.png";
const About = () => {
  return (
    <div className="About" id="About">
      <div className="About-container container">
        <img
          className="wow fadeIn"
          data-wow-delay=".5s"
          data-wow-duration="2s"
          src={chris}
          alt="Christopher Abreu"
          id="picture"
        />
        <div className="info">
          <h1 className="wow fadeInRight" data-wow-delay=".5s">
            About
          </h1>
          <p
            className="wow fadeIn"
            data-wow-delay=".5s"
            data-wow-duration="1.5s"
          >
            Greetings, my name is Christopher Abreu, and I am an experienced
            Full-Stack Web Developer. I possess a strong passion for web
            development and continually pursue opportunities to expand my
            knowledge and refine my skills in the field. In my leisure time, I
            relish the chance to tackle new and complex projects that enable me
            to further enhance my proficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
