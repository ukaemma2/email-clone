
import React from "react"
import {Button} from '@material-ui/core'
import {Add, Inbox, Star} from '@material-ui/icons'

import './Sidebar.css'
import SidebarOption from "../sidebarOption/SidebarOption"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar_compose"
        startIcon={<Add fontSize="large"
        />}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} />
      <SidebarOption Icon={Star} title="Star" number={54} />
    </div>
  )
}
export default Sidebar
