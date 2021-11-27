import React from "react"
import "./SidebarOption.css"

function SidebarOption(props) {
  const {Icon, title, number} = props
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
      
    </div>
  )
}

export default SidebarOption
