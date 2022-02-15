
import React from "react"
import {Button, IconButton} from '@material-ui/core'
import {
  AccessTime, 
  Add, 
  Duo, 
  ExpandMore, 
  Inbox, 
  LabelImportant, 
  NearMe, 
  Note, 
  Person, 
  Phone, 
  Star
} from '@material-ui/icons'

import './Sidebar.css'
import SidebarOption from "../sidebarOption/SidebarOption"
import { useDispatch } from "react-redux"
import { openSendMessage } from "../../features/mailSlice"


const Sidebar = () => {
 const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button onClick={()=> dispatch(openSendMessage())} className="sidebar_compose"
        startIcon={<Add fontSize="large"
        />}
      >
        Compose
      </Button>
      <SidebarOption 
        Icon={Inbox} 
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={Star} title="Starred" number={74} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={14} />
      <SidebarOption Icon={LabelImportant} title="Important" number={20} />
      <SidebarOption Icon={NearMe} title="Sent" number={37} />
      <SidebarOption Icon={Note} title="Drafts" number={60} />
      <SidebarOption Icon={ExpandMore} title="More" number={222} />
      
      <div className="sidebar_footer">
        <div className="sidebar_footer_icons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
