import * as React from "react";
import AnimatedText from "../AnimatedText/AnimatedText.js";
import NavigationMenu from "../NavigationMenu/NavigationMenu.js";
import "./Header.scss";

// markup
const Header = (input) => {
  return (
    <header>
      <AnimatedText />
      <NavigationMenu selectedPage={input.selectedPage} />
    </header>
  );
};

export default Header;
