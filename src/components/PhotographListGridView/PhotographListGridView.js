import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import Controller from "../Controller/Controller.js";
import "./PhotographListGridView.scss";

// markup
const PhotographListGridView = (input) => {
  return (
    <div className="grid-view-wrapper slide-in-right">
      <Controller view={input.view} onViewChange={input.onViewChange} />
      <div className="grid-view">
        {input.data.map((props) => {
          return <Photograph {...props} showProperties={false} />;
        })}
      </div>
    </div>
  );
};

export default PhotographListGridView;
