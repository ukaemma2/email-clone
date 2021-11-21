import React from "react";
// import EmailIcon from '@material-ui/icons/Email';
import { ArrowDropDown, Menu, Search} from '@material-ui/icons';
import './Header.css'
import { IconButton } from "@material-ui/core";
export const Header = () => {
  return (
    <div className="header">
     <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img 
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" 
          alt="gmail" 
        />
     </div>
     <div className="header_middle">
       <IconButton>
          <Search />
       </IconButton>
       <input type="text" />
       <IconButton>
        <ArrowDropDown />
       </IconButton>
     </div> 
     <div className="header_right">

     </div>
    </div>
  )
}
