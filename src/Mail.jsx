import { IconButton } from "@material-ui/core"
import { 
  ArrowBack, 
  CheckCircle, 
  Delete, 
  Email, 
  Error, 
  LabelImportant, 
  MoreVert,
  UnfoldMore,
  MoveToInbox,
  WatchLater,
  Print,
  ExitToApp
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
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>Subject</h2>
            <LabelImportant className="mail__important" />
            <p>Title</p>
            <p>10pm</p>
          </div>
          <div className="mail__message">This is a message</div>
        </div>
    </div> 
  )
}

export default Mail
