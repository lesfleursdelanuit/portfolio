import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import Controller from "../Controller/Controller.js";
import "./PhotographListGridView.scss";

// markup
const PhotographListGridView = (input) => {
  return (
    <div className="grid-view-wrapper slide-in-right">
      <div>
        <Controller
          view={input.view}
          onViewChange={input.onViewChange}
          manager={input.manager}
          filter={input.filter}
        />
      </div>
      <div className="grid-view">
        {input.data.map((props, index) => {
          return (
            <Photograph
              manager={input.manager}
              {...props}
              key={index}
              showProperties={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotographListGridView;
