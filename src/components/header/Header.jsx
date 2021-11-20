import React from "react";
// import EmailIcon from '@material-ui/icons/Email';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
import { IconButton } from "@material-ui/core";
export const Header = () => {
  return (
    <div>
     <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
     </div>
     <div className="header_middle">

     </div>
     <div className="header_right">

     </div>
    </div>
  )
}
