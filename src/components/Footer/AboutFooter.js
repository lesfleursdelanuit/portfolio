import * as React from "react";
import { faHeart, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

// markup
const AboutFooter = (input) => {
  return (
    <div className="about-footer">
      <ul>
        <li>SECTIONS</li>
        <li>
          <span className="icon heart">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="label" data-choice="monica">
            monica
          </span>
        </li>
        <li>
          <span className="icon sitemap">
            <FontAwesomeIcon icon={faSitemap} />
          </span>
          <span className="label" data-choice="this site">
            this site
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AboutFooter;
