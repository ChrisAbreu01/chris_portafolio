import React from "react";
import skills from "../../data/Skills";
import "./Technologies.scss";

const Technologies = () => {
  return (
    <div className="Skills">
      <div className="Skills-container container">
        <h1 className="wow fadeInDown" data-wow-delay=".5s">
          Skills
        </h1>
        <p className="text-2">
          I always enjoy learning new things. Especially the technologies that
          make your company special.
        </p>
        <div className="container grid-skills">
          {skills.map((skill) => (
            <div className="skill-box grow" key={skill.id}>
              <p>
                {skill.icon ? <i className={skill.className}></i> : null}
                {skill.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
