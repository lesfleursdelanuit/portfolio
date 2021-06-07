import React from "react";
import PhotographProperties from "../PhotographProperties/PhotographProperties.js";
import "./Photograph.scss";

class Photograph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.image.gatsbyImageData.images.fallback.src,
    };
  }
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
  makeClasses() {
    let classes = ["photograph-element", "pane"];
    if (this.props.isVisible !== undefined && this.props.isVisible)
      classes.push("visible");
    if (this.props.isSelected !== undefined && this.props.isSelected)
      classes.push("selected");

    return classes.join(" ");
  }

  render() {
    return (
      <div className={this.makeClasses()}>
        <div className="photograph">
          <img src={this.props.image.gatsbyImageData.images.fallback.src} />
        </div>
        {this.makeProperties(this.props.showProperties)}
      </div>
    );
  }
}

export default Photograph;
