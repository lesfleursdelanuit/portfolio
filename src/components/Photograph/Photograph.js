import React from "react";
import PhotographProperties from "../PhotographProperties/PhotographProperties.js";
import "./Photograph.scss";

class Photograph extends React.Component {
  makeProperties() {
    let props = [
      { name: "Tags", data: this.props.tags },
      { name: "Colors", data: this.props.colors },
      { name: "Locations", data: this.props.locations },
    ];
    if (this.props.showProperties) {
      return (
        <ul className="photograph-properties">
          {props.map((prop) => {
            return <PhotographProperties {...prop} />;
          })}
        </ul>
      );
    }

    return null;
  }
  render() {
    return (
      <div className="photograph-element">
        <div className="photograph">
          <img
            src={this.props.image.gatsbyImageData.images.fallback.src}
            width={this.props.photographWidth}
          />
        </div>
        {this.makeProperties(this.props.showProperties)}
      </div>
    );
  }
}

export default Photograph;
