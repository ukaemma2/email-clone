import { IconButton } from "@material-ui/core"
import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, Settings } from "@material-ui/icons"
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
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="email_list_setting_right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton> 
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="imailList_section">
        
      </div>
    </div>
  )
}

export default EmailList
