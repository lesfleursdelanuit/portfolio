import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import "./PhotographListGridView.scss";

// markup
const PhotographListGridView = (input) => {
  return (
    <div className="grid-view">
      {input.data.map((props) => {
        return (
          <Photograph {...props} showProperties={false} photographWidth={150} />
        );
      })}
    </div>
  );
};

export default PhotographListGridView;
