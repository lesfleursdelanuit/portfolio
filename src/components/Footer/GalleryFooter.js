import * as React from "react";
import LocationPicker from "../LocationPicker/LocationPicker.js";
import ColorPicker from "../ColorPicker/ColorPIcker.js";
import TagPicker from "../TagPicker/TagPicker.js";
import "./Footer.scss";

// markup
const GalleryFooter = (input) => {
  return (
    <div className="gallery-footer">
      <div className="footer-button">
        <ul>
          <li>FILTERS</li>
          <li>
            <LocationPicker locations={input.locations} />
          </li>
          <li>
            <TagPicker tags={input.tags} />
          </li>
          <li>
            <ColorPicker colors={input.colors} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryFooter;
