import React from "react";
import "./Color.scss";

class Color extends React.Component {
  render() {
    //  console.log(this.props);
    return <li className="color">{this.props.name}</li>;
  }
}

export default Color;
