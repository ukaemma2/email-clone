import { IconButton } from "@material-ui/core"
import { 
  ArrowBack, 
  CheckCircle, 
  Delete, 
  Email, 
  Error, 
  LabelImportant, 
  MoreVert, 
  MoveToInbox,
  WatchLater
 } from "@material-ui/icons"
import React from "react"
import "./Mail.css"
import {useNavigate} from "react-router-dom"


const Mail = () => {
  const navigate = useNavigate()
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>

        </div>
        <div className="email__toolsRight">

        </div>
      </div>
    </div> 
  )
}

export default Mail
