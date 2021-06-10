import * as React from "react";
import AnimatedText from "../AnimatedText/AnimatedText.js";
import NavigationMenu from "../NavigationMenu/NavigationMenu.js";
import NavigationDrawer from "../NavigationMenu/NavigationDrawer.js";
import "./Header.scss";

// markup
const Header = (input) => {
  return (
    <header>
      <AnimatedText />
      <NavigationDrawer selectedPage={input.selectedPage} />
    </header>
  );
};

export default Header;
/*      <NavigationMenu selectedPage={input.selectedPage} />
 */
