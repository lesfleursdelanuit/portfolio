import * as React from "react";
import Photograph from "../Photograph/Photograph.js";
import Slide from "./Slide.js";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PhotographListCarouselView.scss";

// markup
const PhotographListCarouselView = (input) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [numVisisble, setNumVisible] = React.useState(3);

  const isVisible = (index) => {
    // how many will be visible?
    let lastIndex = startIndex + numVisisble;
    return index >= startIndex && index < lastIndex;
  };

  const moveLeft = () => {
    let newStartIndex = startIndex - 1;
    if (newStartIndex < 0) newStartIndex = input.data.length - 1;
    setStartIndex(newStartIndex);
  };

  const moveRight = () => {
    let newStartIndex = startIndex + 1;
    if (newStartIndex >= input.data.length) newStartIndex = 0;
    setStartIndex(newStartIndex);
  };

  const getVisibleList = () => {
    if (numVisisble === 3) {
      const numLeft = input.data.length - startIndex;
      if (numLeft >= 3) return [startIndex, startIndex + 1, startIndex + 2];
      if (numLeft === 1) return [startIndex, 0, 1];
      return [startIndex, startIndex + 1, 0];
    }

    return [startIndex];
  };

  const visibleList = getVisibleList();

  return (
    <div className="carousel-view">
      <div className="left-arrow arrow" onClick={moveLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="carousel-middle">
        {visibleList.map((index) => {
          const photograph = input.data[index];
          return <Slide index={index} data={photograph} />;
        })}
      </div>
      <div className="right-arrow arrow" onClick={moveRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default PhotographListCarouselView;
