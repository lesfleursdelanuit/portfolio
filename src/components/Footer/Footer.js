import * as React from "react";
import GalleryFooter from "./GalleryFooter.js";
import AboutFooter from "./AboutFooter.js";
import "./Footer.scss";

// markup
const Footer = (input) => {
  let appManagerId = null;

  const determineWhichFooter = (whichPage) => {
    if (whichPage === undefined) return null;
    else if (whichPage === "gallery")
      return (
        <GalleryFooter
          {...input}
          whichFilter={input.manager.getFilter()}
          whichFilterType={input.manager.getFilterType()}
          // onFilterChange={input.onFilterChange}
          manager={input.manager}
        />
      );
    else if (whichPage === "about")
      return <AboutFooter {...input} manager={input.manager} />;
    return null;
  };
  return <footer>{determineWhichFooter(input.selectedPage)}</footer>;
};

export default Footer;
