import * as React from "react";
import {
  faBars,
  faChevronRight,
  faImage,
  faAsterisk,
  faPaperPlane,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./NavigationMenu.scss";

// markup
const NavigationDrawer = (input) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "gallery", icon: faImage },
    { text: "about", icon: faAsterisk },
    { text: "inquiries", icon: faPaperPlane },
    { text: "shop", icon: faShoppingCart },
    { text: "instagram", icon: faInstagramSquare },
  ];

  const makeSelectedPage = (text) => {
    let classes = ["more-menu-item-label"];
    if (text === input.selectedPage) classes.push("selectedPage");
    return classes.join(" ");
  };

  const makeOpenButtonClasses = () => {
    let classes = ["more-menu-open-button"];
    if (open) classes.push("hide");

    return classes.join(" ");
  };

  return (
    <div className="more-menu">
      <div className={makeOpenButtonClasses()}>
        <IconButton onClick={handleDrawerOpen}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      </div>
      <Drawer
        className="more-menu-drawer"
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: { color: "white", "background-color": "black !important" },
        }}
      >
        <div className="more-menu-drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <FontAwesomeIcon icon={faChevronRight} />
          </IconButton>
        </div>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} className="more-menu-item">
              <ListItemIcon>
                <FontAwesomeIcon icon={item.icon} />
              </ListItemIcon>
              <ListItemText
                className={makeSelectedPage(item.text)}
                primary={item.text}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;
