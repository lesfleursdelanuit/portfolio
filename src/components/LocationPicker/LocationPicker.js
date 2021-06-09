import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LocationPicker.scss";

// markup
const LocationPicker = (input) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const options = input.locations.nodes.sort((a, b) => {
    return a.name < b.name;
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
    let data = { id: e.target.dataset.id, type: "locations" };
    // input.onFilterChange(data);
    input.manager.handleFilterChange(data);
  };
  return (
    <div>
      <div onClick={handleClick}>
        <span className="icon">
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </span>
        <span className="label">locations</span>
      </div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 8.5,
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
              input.whichFilterType === "locations" &&
              input.whichFilter === option.name
            }
            className="menu-item"
            onClick={handleMenuItemClick}
            data-v={option.value}
            data-id={option.id}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LocationPicker;
