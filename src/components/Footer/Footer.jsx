import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © SunnySchool &{" "}
        <a href="https://github.com/mateuszskuupien">Mateusz Skupień</a>. All
        rights reserved.
      </p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
