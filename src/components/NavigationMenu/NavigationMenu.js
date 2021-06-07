import React from "react";
import {
  faPaperPlane,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavigationMenu.scss";

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: "gallery",
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
              GALLERY
            </li>
            <li
              data-name="collections"
              className={this.makeClasses("collections")}
            >
              COLLECTIONS
            </li>
            <li data-name="about" className={this.makeClasses("about")}>
              ABOUT
            </li>
            <li data-name="inquiries" className={this.makeClasses("inquiries")}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </li>
            <li data-name="shop" className={this.makeClasses("shop")}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationMenu;
