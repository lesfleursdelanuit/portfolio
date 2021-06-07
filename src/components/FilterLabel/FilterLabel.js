import * as React from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FilterLabel.scss";

// markup
const FilterLabel = (input) => {
  return (
    <div className="filter-label">
      <span className="icon">
        <FontAwesomeIcon icon={faFilter} />
      </span>
      <span className="label">{input.filter}</span>
    </div>
  );
};

export default FilterLabel;
