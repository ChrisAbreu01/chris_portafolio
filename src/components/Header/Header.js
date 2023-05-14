import React from "react";
import logo from "../../images/logo2long.png";
import logoWhite from "../../images/logo2longinverted.png";
import "./Header.scss";
import { Link } from "react-scroll";

const Header = ({ menuToggle, menuHandler, darkModeToogle, isDarkMode }) => {
  const icon = isDarkMode ? "fa-sun yellow-icon" : "fa-moon grey-icon";
  const backgroundMobileMenu = isDarkMode ? "black-bg" : "white-bg";
  return (
    <header
      className="Nav wow fadeIn"
      data-wow-delay=".5s"
      data-wow-duration="3.5s"
    >
      <div className="Nav-container lg-container">
        <div className="logo">
          <img src={isDarkMode ? logoWhite : logo} alt="" />
        </div>

        {menuToggle ? (
          <nav className={`menu-nav ${backgroundMobileMenu}`}>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => menuHandler()}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  onClick={() => menuHandler()}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="nav-link"
                  duration={500}
                  onClick={() => menuHandler()}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/uc?export=download&id=1UVgSQ9U75bsv5IUBA3y16Em2uD1wLjb_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                  onClick={() => menuHandler()}
                >
                  Resume
                </a>
              </li>
              <li>
                <i
                  className={`dark-mode-icon fas ${icon}`}
                  onClick={darkModeToogle}
                ></i>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="navbar wow fadeIn">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <i
              className={`dark-mode-icon fas ${icon}`}
              onClick={darkModeToogle}
            ></i>
          </nav>
        )}
        <div className="menu-icon">
          <i onClick={() => menuHandler()} className={` fas fa-ellipsis-h`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
