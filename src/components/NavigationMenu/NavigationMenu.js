import React from "react";
import {
  faPaperPlane,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavigationMenu.scss";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: this.props.selectedPage,
    };
  }

  makeClasses = (n) => {
    let classes = [""];
    if (n === this.state.selectedPage) classes.push("selectedPage");
    return classes.join(" ");
  };

  render() {
    return (
      <div className="slide-in-top">
        <nav>
          <ul>
            <li data-name="gallery" className={this.makeClasses("gallery")}>
              <a href="/">GALLERY</a>
            </li>
            <li data-name="about" className={this.makeClasses("about")}>
              <a href="/about">ABOUT</a>
            </li>
            <li data-name="inquiries" className={this.makeClasses("inquiries")}>
              <a href="/inquiries">
                <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </li>
            <li data-name="shop" className={this.makeClasses("shop")}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            <li
              data-name="instagram-link"
              className={this.makeClasses("instagram-link")}
            >
              <a href="https://wwww.instagram.com/lesfleursdelanuit/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationMenu;
