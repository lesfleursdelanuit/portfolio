import React from "react";
import "./Location.scss";

class Location extends React.Component {
  render() {
    return <li className="location">{this.props.name}</li>;
  }
}

export default Location;
