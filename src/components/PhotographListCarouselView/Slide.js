import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import "./PhotographListCarouselView.scss";

// markup
const Slide = (input) => {
  return (
    <div className="slide">
      <Photograph isVisible={true} {...input.data} showProperties={false} />
    </div>
  );
};

export default Slide;
