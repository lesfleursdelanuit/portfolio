import React from "react";
import Tag from "../Tag/Tag.js";
import Color from "../Color/Color.js";
import Location from "../Location/Location.js";
import "./PhotographProperties.scss";

class PhotographProperties extends React.Component {
  determinePropType(t, d) {
    if (t === "Tags") return <Tag {...d} />;
    else if (t === "Colors") return <Color {...d} />;
    else return <Location {...d} />;
  }
  render() {
    return (
      <li className={this.props.name.toLowerCase()}>
        <b>{this.props.name}</b>
        <ul>
          {this.props.data.map((d) => {
            return this.determinePropType(this.props.name, d);
          })}
        </ul>
      </li>
    );
  }
}

export default PhotographProperties;
