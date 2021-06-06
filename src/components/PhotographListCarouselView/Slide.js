import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import "./PhotographListCarouselView.scss";

// markup
const Slide = (input) => {
  return <Photograph isVisible={true} {...input.data} showProperties={false} />;
};

export default Slide;
