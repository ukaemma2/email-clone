import { IconButton } from "@material-ui/core"
import { CheckBoxOutlineBlank, LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons"
import React from "react"
import './EmailRow.css'

import { useNavigate} from 'react-router-dom'

function EmailRow({title,id,subject, description, time}) {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/Mail")} className="emailRow">
      <div className="emailRow__options">
        <IconButton><CheckBoxOutlineBlank /></IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">
        {title}
      </h3>
      <div className="emailRow__message">
        <h4> 
          {subject} {' '}
          <span className="emailRow__description">
            {description}
          </span>
        </h4>
      </div>
      <div className="emailRow__time"> 
        {time}
      </div>
    </div>
  )
}

export default EmailRow
