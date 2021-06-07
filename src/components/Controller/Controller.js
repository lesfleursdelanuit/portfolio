import * as React from "react";
import { faTh, faColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Controller.scss";

// markup
const Controller = (input) => {
  const makeClasses = (c) => {
    if (c === input.view) return "selectedView";
    return "";
  };
  return (
    <div className="controller">
      <FontAwesomeIcon
        icon={faTh}
        className={makeClasses("grid")}
        onClick={() => {
          input.onViewChange("grid");
        }}
      />
      <FontAwesomeIcon
        icon={faColumns}
        className={makeClasses("carousel")}
        onClick={() => {
          input.onViewChange("carousel");
        }}
      />
    </div>
  );
};

export default Controller;
