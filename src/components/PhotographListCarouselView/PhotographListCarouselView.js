import * as React from "react";
import Slide from "./Slide.js";
import Controller from "../Controller/Controller.js";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterLabel from "../FilterLabel/FilterLabel.js";
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
    <div className="carousel-view slide-in-right">
      <div className="left-arrow arrow" onClick={moveLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="carousel-middle">
        <div>
          <Controller
            view={input.view}
            onViewChange={input.onViewChange}
            filter={input.filter}
          />
        </div>
        <div className="slides">
          {visibleList.map((index, i) => {
            const photograph = input.data[index];
            const isMiddle =
              (numVisisble === 3 && i === 1) || (numVisisble === 0 && i === 0);
            return (
              <Slide index={index} isMiddle={isMiddle} data={photograph} />
            );
          })}
        </div>
      </div>
      <div className="right-arrow arrow" onClick={moveRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default PhotographListCarouselView;
