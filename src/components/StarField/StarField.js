import React from "react";
import "./StarField.scss";

class StarField extends React.Component {
  render() {
    return (
      <div>
        <div className="gradient"></div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    );
  }
}

export default StarField;
