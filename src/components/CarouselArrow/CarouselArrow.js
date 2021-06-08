import * as React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CarouselArrow.scss";

// markup
const CarouseArrow = (input) => {
  const makeClasses = (dir) => {
    let classes = ["arrow"];
    if (dir === "left") classes.push("left-arrow");
    else classes.push("right-arrow");

    return classes.join(" ");
  };

  const determineIcon = (dir) => {
    if (dir === "left") return faChevronLeft;
    return faChevronRight;
  };

  return (
    <div className={makeClasses(input.dir)} onClick={input.handleMove}>
      <FontAwesomeIcon icon={determineIcon(input.dir)} />
    </div>
  );
};

export default CarouseArrow;
