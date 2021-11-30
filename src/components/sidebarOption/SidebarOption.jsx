import React from "react"
import "./SidebarOption.css"

function SidebarOption(props) {
  const {Icon, title, number, selected} = props
  return (
    <div className={` ${selected? 'sidebarOption--active' : 'sidebarOption'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
      
    </div>
  )
}

export default SidebarOption
