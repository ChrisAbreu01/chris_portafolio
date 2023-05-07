import React, { Component } from "react";
import BigProjectsData from "../../data/ProjectsData";
import "./Projects.scss";

import ProjectsHeader from "./ProjectHeader";
class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="project">
        <div className="sm-container">
          <ProjectsHeader />
          {BigProjectsData.map((curr) => (
            <div
              className="Project-box wow fadeIn"
              data-wow-delay=".8s"
              key={curr.name}
            >
              <div className="left-side">
                {curr.image ? (
                  <a
                    href={curr.live || "/"}
                    className="live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={curr.image} alt={curr.name} />
                  </a>
                ) : null}

                <div className="btn-container">
                  <a
                    href={curr.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="code-btn"
                  >
                    <i className="fab fa-github"></i>Code
                  </a>
                  <a
                    href={curr.live || "/"}
                    className="live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-link"></i>Live
                  </a>
                </div>
              </div>
              <div className="right-side">
                <h1 className="project-name">
                  {curr.name}{" "}
                  {curr.production ? null : <span> ( Underproduction )</span>}
                </h1>
                <p className="description">{curr.description}</p>
                {curr.techs_used ? (
                  <div className="tech-used flex-right">
                    {curr.techs_used.map((tech) => (
                      <p key={tech}>{tech}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
