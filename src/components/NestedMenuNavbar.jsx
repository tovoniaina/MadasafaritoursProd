import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";


export default function NestedMenuNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='nestedMenu'
      >
        Madagascar <ArrowDropDownIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}> <Link to="/Madagascars" className="madagascarMenu" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">History</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to="/GalleryPhoto" className="madagascarMenu" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">Gallery photos</Link></MenuItem>
      </Menu>
    </div>
  );
}
