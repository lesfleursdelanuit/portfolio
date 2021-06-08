import * as React from "react";
import GalleryFooter from "./GalleryFooter.js";
import AboutFooter from "./AboutFooter.js";
import "./Footer.scss";

// markup
const Footer = (input) => {
  const determineWhichFooter = (whichPage) => {
    if (whichPage === undefined) return null;
    else if (whichPage === "gallery")
      return (
        <GalleryFooter
          {...input}
          whichFilter={input.whichFilter}
          whichFilterType={input.whichFilterType}
          onFilterChange={input.onFilterChange}
        />
      );
    else if (whichPage === "about") return <AboutFooter {...input} />;
    return null;
  };
  return <footer>{determineWhichFooter(input.selectedPage)}</footer>;
};

export default Footer;
