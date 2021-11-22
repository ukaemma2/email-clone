import React from "react";
// import EmailIcon from '@material-ui/icons/Email';
import { Apps, ArrowDropDown, Menu, Notifications, Search} from '@material-ui/icons';
import './Header.css'
import { Avatar, IconButton } from "@material-ui/core";
export const Header = () => {
  return (
    <div className="header">
     <section className="header_left">
        <IconButton>
          <Menu className="menu" />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" 
          alt="gmail" 
        />
     </section>
     <section className="header_middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown />
     </section> 
     <section className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar className="avatar" />
     </section>
    </div>
  )
}
