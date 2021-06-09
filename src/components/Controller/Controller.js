import * as React from "react";
import { faTh, faColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterLabel from "../FilterLabel/FilterLabel.js";
import "./Controller.scss";

// markup
const Controller = (input) => {
  const makeClasses = (c) => {
    let classes = ["controller-button"];
    if (c === input.view) classes.push("selectedView");
    return classes.join(" ");
  };
  return (
    <div className="controller">
      <div
        className={makeClasses("grid")}
        onClick={() => {
          //input.onViewChange("grid");
          input.manager.handleViewChange("grid");
        }}
      >
        <FontAwesomeIcon icon={faTh} />
      </div>
      <div
        className={makeClasses("carousel")}
        onClick={() => {
          //  input.onViewChange("carousel");
          input.manager.handleViewChange("carousel");
        }}
      >
        <FontAwesomeIcon icon={faColumns} />
      </div>
      <FilterLabel filter={input.filter.toUpperCase()} />
    </div>
  );
};

export default Controller;
