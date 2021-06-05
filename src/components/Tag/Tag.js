import React from "react";
import "./Tag.scss";

class Tag extends React.Component {
  render() {
    //  console.log(this.props);
    return <li className="tag">{this.props.name}</li>;
  }
}

export default Tag;
