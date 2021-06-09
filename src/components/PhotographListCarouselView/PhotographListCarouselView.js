import * as React from "react";
import Slide from "./Slide.js";
import Controller from "../Controller/Controller.js";
import CarouselArrow from "../CarouselArrow/CarouselArrow.js";
import "./PhotographListCarouselView.scss";

// markup
const PhotographListCarouselView = (input) => {
  const [startIndex, setStartIndex] = React.useState(
    input.manager.getStartIndex()
  );
  const [numVisible, setNumVisible] = React.useState(3);
  const carouselMiddleRef = React.useRef(null);
  const carouselViewRef = React.useRef(null);
  let appManagerId = null;

  React.useEffect(() => {
    appManagerId = input.manager.registerListener((changed) => {
      let changedSet = new Set(changed);
      if (changedSet.has("startIndex") || changedSet.has("filter")) {
        if (input.manager.getStartIndex() === 0)
          carouselMiddleRef.current.scrollLeft = 0;
        setStartIndex(input.manager.getStartIndex());
      }
    });

    return () => {
      input.manager.unregisterListener(appManagerId);
    };
  }, startIndex);

  const isVisible = (index) => {
    // how many will be visible?
    let lastIndex = startIndex + numVisible;
    return index >= startIndex && index < lastIndex;
  };

  const determineIsMiddle = (index) => {
    // (numVisible === 3 && index === startIndex + 1) || numVisible === 1;
    if (input.data.length < numVisible) return index === 0;
    return (numVisible === 3 && index === startIndex + 1) || numVisible === 1;
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
    if (newStartIndex >= 0) {
      carouselMiddleRef.current.scrollLeft -= computeWidth(newStartIndex);
      input.manager.handleStartIndexChange(newStartIndex);
      console.log(input.manager.startIndex);
    }
  };

  const moveRight = () => {
    let newStartIndex = startIndex + 1;
    let numLeft = input.data.length - newStartIndex;
    if (newStartIndex < input.data.length && numLeft >= numVisible) {
      carouselMiddleRef.current.scrollLeft += computeWidth(newStartIndex);
      input.manager.handleStartIndexChange(newStartIndex);
      console.log(input.manager.startIndex);
    }
  };

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
        <div className="slides" ref={carouselMiddleRef}>
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
