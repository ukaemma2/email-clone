import { IconButton } from "@material-ui/core"
import { ArrowDropDown, CheckBoxOutlineBlank } from "@material-ui/icons"
import React from "react"


const EmailList = () => {
  return (
    <div className="emailist">
      <div className="email_list_setting">
        <div className="email_list_setting_left">
          <CheckBoxOutlineBlank />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default EmailList
