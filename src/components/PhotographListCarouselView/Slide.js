import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import "./PhotographListCarouselView.scss";

// markup
const Slide = (input) => {
  const makeClasses = () => {
    let classes = ["slide", "slide-fadeIn"];
    if (input.isMiddle) classes.push("middle-slide");

    return classes.join(" ");
  };
  return (
    <div className={makeClasses()}>
      <Photograph isVisible={true} {...input.data} showProperties={false} />
    </div>
  );
};

export default Slide;
