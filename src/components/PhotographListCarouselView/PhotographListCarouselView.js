import * as React from "react";
import Slide from "./Slide.js";
import Controller from "../Controller/Controller.js";
import CarouselArrow from "../CarouselArrow/CarouselArrow.js";
import "./PhotographListCarouselView.scss";
import { css, cx } from "@emotion/react";

const pane_width = "23";
const margin = "1";

// markup
const PhotographListCarouselView = (input) => {
  input.manager.numLeft = input.data.length;
  input.manager.setDataLength(input.data.length, 3);
  const [startIndex, setStartIndex] = React.useState(
    input.manager.getStartIndex()
  );
  const [numVisible, setNumVisible] = React.useState(3);
  const [current, setCurrent] = React.useState(input.manager.getCurrent());
  const carouselMiddleRef = React.useRef(null);
  const carouselViewRef = React.useRef(null);
  let appManagerId = null;

  React.useEffect(() => {
    appManagerId = input.manager.registerListener((changed) => {
      let changedSet = new Set(changed);
      if (
        changedSet.has("startIndex") ||
        changedSet.has("filter") ||
        changedSet.has("numLeft") ||
        changedSet.has("current")
      ) {
        if (input.manager.getStartIndex() === 0)
          carouselMiddleRef.current.scrollLeft = 0;
        setStartIndex(input.manager.getStartIndex());
        setCurrent(input.manager.getCurrent());
      }
    });

    return () => {
      input.manager.unregisterListener(appManagerId);
    };
  });

  const isVisible = (index) => {
    let lastIndex = startIndex + numVisible;
    return index >= startIndex && index < lastIndex;
  };

  const determineIsMiddle = (index) => {
    if (input.data.length < numVisible) return true;
    return index === current;
  };

  const computeWidth = (i) => {
    const slide = carouselMiddleRef.current.childNodes[i];
    const computedStyle = window.getComputedStyle(slide);
    let width = parseFloat(computedStyle.width);
    width += parseFloat(computedStyle.marginRight);
    width += parseFloat(computedStyle.marginLeft);

    return width;
  };

  const moveLeft = () => {
    let newStartIndex = startIndex - 1;
    let newCurrent = current - 1;
    if (newCurrent >= 0) {
      if (newStartIndex >= 0) {
        carouselMiddleRef.current.scrollLeft -= computeWidth(newStartIndex);
        input.manager.handleStartIndexChange(newStartIndex);
      }
      input.manager.handleSetCurrent(newCurrent);
    }
  };

  const moveRight = () => {
    let newStartIndex = startIndex + 1;
    let newCurrent = current + 1;
    let numLeft = input.data.length - newStartIndex;
    if (newCurrent < input.data.length) {
      if (numLeft >= numVisible) {
        carouselMiddleRef.current.scrollLeft += computeWidth(newStartIndex);
        input.manager.handleStartIndexChange(newStartIndex);
      }

      input.manager.handleSetCurrent(newCurrent);
    }
  };

  let num = input.data.length >= numVisible ? numVisible : input.data.length;
  let totalPaneWidth = pane_width * num;
  let totalMargins = input.data.length >= numVisible ? margin * 4 : margin * 2;
  let totalNewWidth = totalMargins + totalPaneWidth;

  return (
    <div ref={carouselViewRef} className="carousel-view slide-in-right">
      <CarouselArrow manager={input.manager} dir="left" handleMove={moveLeft} />
      <div className="carousel-middle">
        <div>
          <Controller
            view={input.view}
            onViewChange={input.onViewChange}
            manager={input.manager}
            filter={input.filter}
          />
        </div>
        <div
          className="slides"
          ref={carouselMiddleRef}
          style={{ width: totalNewWidth + "vw" }}
        >
          {input.data.map((node, i) => {
            const photograph = node;
            let isMiddle = determineIsMiddle(i);
            return (
              <Slide
                manager={input.manager}
                index={i}
                isMiddle={isMiddle}
                data={photograph}
              />
            );
          })}
        </div>
      </div>
      <CarouselArrow
        manager={input.manager}
        dir="right"
        handleMove={moveRight}
      />
    </div>
  );
};

export default PhotographListCarouselView;
