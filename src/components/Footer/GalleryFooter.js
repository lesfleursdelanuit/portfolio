import * as React from "react";
import LocationPicker from "../LocationPicker/LocationPicker.js";
import ColorPicker from "../ColorPicker/ColorPIcker.js";
import TagPicker from "../TagPicker/TagPicker.js";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

// markup
const GalleryFooter = (input) => {
  return (
    <div className="gallery-footer">
      <div className="footer-button">
        <ul>
          <li>FILTERS</li>
          <li>
            <LocationPicker
              locations={input.locations}
              whichFilter={input.whichFilter}
              whichFilterType={input.whichFilterType}
              onFilterChange={input.onFilterChange}
            />
          </li>
          <li>
            <TagPicker
              tags={input.tags}
              whichFilter={input.whichFilter}
              whichFilterType={input.whichFilterType}
              onFilterChange={input.onFilterChange}
            />
          </li>
          <li>
            <ColorPicker
              colors={input.colors}
              whichFilter={input.whichFilter}
              whichFilterType={input.whichFilterType}
              onFilterChange={input.onFilterChange}
            />
          </li>
          <li>
            <span className="icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="label">all</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryFooter;
