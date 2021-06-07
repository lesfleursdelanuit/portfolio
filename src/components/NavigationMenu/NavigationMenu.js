import React from "react";
import "./NavigationMenu.scss";

class NavigationMenu extends React.Component {
  render() {
    return (
      <div className="slide-in-top">
        <nav>
          <ul>
            <li>COLLECTIONS</li>
            <li>ABOUT</li>
            <li>INQUIRIES</li>
            <li>SHOP</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationMenu;
