import * as React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

// markup
const Footer = (input) => {
  return (
    <footer>
      <div className="footer-button">
        <a href="https://wwww.instagram.com/lesfleursdelanuit/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
