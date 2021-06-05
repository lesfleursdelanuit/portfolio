import React from "react";
import "./AnimatedText.scss";

class AnimatedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };

    this.makeClasses = this.makeClasses.bind(this);
    this.makeText = this.makeText.bind(this);
    this.tick = this.tick.bind(this);
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.timerID = setTimeout(() => this.tick(), 300);
  }

  tick() {
    this.setState((state, props) => {
      return { animate: !state.animate };
    });
  }

  componentWillUnmount() {
    clearTimeout(this.tmerID);
  }

  makeClasses() {
    let classes = ["text-anim"];
    if (this.state.animate) classes.push("animate");

    return classes;
  }

  makeText(text, cls = "") {
    return text.split("").map((c) => {
      return <span className={cls}>{c}</span>;
    });
  }

  render() {
    return (
      <div>
        <div ref={this.ref} className={this.makeClasses().join(" ")}>
          {this.makeText("LES ")}
          {this.makeText("fleurs", "fleurs")}
          {this.makeText(" DE LA NUIT ")}
        </div>
      </div>
    );
  }
}

export default AnimatedText;
