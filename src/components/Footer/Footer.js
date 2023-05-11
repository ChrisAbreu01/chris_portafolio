import React from "react";
import "./Footer.scss";
const Footer = () => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  return (
    <footer className="Footer">
      <p>Designed by Christopher Abreu © {currentYear}</p>
    </footer>
  );
};

export default Footer;
