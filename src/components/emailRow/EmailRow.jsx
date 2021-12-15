import { IconButton } from "@material-ui/core"
import { CheckBoxOutlineBlank, LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons"
import React from "react"
import './EmailRow.css'

function EmailRow({title,id,subject, description, time}) {
  return (
    <div className="emailRow">
    <div className="emailRow__options">
      <IconButton><CheckBoxOutlineBlank /></IconButton>
      <IconButton>
        <StarBorderOutlined />
      </IconButton>
      <IconButton>
        <LabelImportantOutlined />
      </IconButton>
    </div>
    <div className="emailRow__title">

    </div>
    <div className="emailRow__message">

    </div>
    <div className="emailRow__description">

    </div>
      
    </div>
  )
}

export default EmailRow
