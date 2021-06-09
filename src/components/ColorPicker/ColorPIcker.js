import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ColorPicker.scss";

// markup
const ColorSample = (input) => {
  return (
    <span
      style={{
        width: "15px",
        height: "15px",
        border: "1px solid grey",
        "background-color": input.hex,
        "margin-right": "10px",
      }}
    ></span>
  );
};
const ColorPicker = (input) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const options = input.colors.nodes.sort((a, b) => {
    return a.name > b.name;
  });
  const ITEM_HEIGHT = 48;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (e) => {
    handleClose();
    let data = { id: e.target.dataset.id, type: "colors" };
    input.manager.handleFilterChange(data);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <span className="icon">
          <FontAwesomeIcon icon={faPalette} />
        </span>
        <span className="label">colors</span>
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
            selected={
              input.whichFilterType === "colors" &&
              input.whichFilter === option.name
            }
            className="menu-item"
            onClick={handleMenuItemClick}
            data-v={option.value}
            data-id={option.id}
          >
            <ColorSample hex={option.hexcode.hex} />
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ColorPicker;
