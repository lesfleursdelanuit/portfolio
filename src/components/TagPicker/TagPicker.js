import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TagPicker.scss";

// markup
const TagPicker = (input) => {
  console.log(input);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const options = input.tags.nodes;
  const ITEM_HEIGHT = 48;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div onClick={handleClick}>
        <span className="icon">
          <FontAwesomeIcon icon={faTags} />
        </span>
        <span className="label">tags</span>
      </div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 6,
            width: "30ch",
            "background-color": "black",
            border: "1px solid grey",
            color: "white",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            selected={option === "Pyxis"}
            className="menu-item"
            onClick={handleClose}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default TagPicker;
