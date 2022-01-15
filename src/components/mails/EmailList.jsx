import { IconButton } from "@material-ui/core"
import { 
  ArrowDropDown,
  CheckBoxOutlineBlank, 
  ChevronLeft, 
  ChevronRight, 
  Inbox, 
  KeyboardHide, 
  LocalOffer, 
  MoreVert, 
  People, 
  Redo, 
  Settings 
  } from "@material-ui/icons"
import React from "react"
import EmailRow from "../emailRow/EmailRow"
import Section from "../section/Section"
import'./mails.css'


const EmailList = () => {
  return (
    <div className="emailist">
      <div className="email_list_setting">
        <div className="email_list_setting_left">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>
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
        <Section Icon={Inbox} title="Primary" selected={true} color="red" />
        <Section Icon={People} title="Social"  color="#1473e8" />
        <Section Icon={LocalOffer} title="Promotion" color="green" />
      </div>
      <div className="emaillist__list">
        <EmailRow 
          title="Twitch"
          subject="My fellow streamer!!!"
          description="This is test"
          time="10pm"
         />
           <EmailRow 
          title="Twitch"
          subject="My fellow streamer!!!"
          description="This is test"
          time="10pm"
         />
           <EmailRow 
          title="Twitch"
          subject="My fellow streamer!!!"
          description="This is test"
          time="10pm"
         />
      </div>
    </div>
  )
}
export default EmailList
