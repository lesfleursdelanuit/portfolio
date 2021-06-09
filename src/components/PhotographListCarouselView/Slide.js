import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import "./PhotographListCarouselView.scss";

// markup
const Slide = (input) => {
  const [startAnimation, setStartAnimation] = React.useState(true);

  const makeClasses = () => {
    let classes = ["slide"];
    if (input.isMiddle) classes.push("middle-slide");
    if (startAnimation) classes.push("slide-fadeIn");
    return classes.join(" ");
  };

  return (
    <div
      className={makeClasses()}
      onAnimationEnd={() => {
        setStartAnimation(false);
      }}
      data-id={input.index}
    >
      <Photograph isVisible={true} {...input.data} showProperties={false} />
    </div>
  );
};

export default Slide;
