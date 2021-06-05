import React from "react";
import "./NavigationMenu.scss";

class NavigationMenu extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>CATEGORIES</li>
            <li>COLLECTIONS</li>
            <li>ABOUT</li>
            <li>INQUIRIES</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationMenu;
