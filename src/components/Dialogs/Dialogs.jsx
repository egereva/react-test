import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
      <div className={s.dialog + ' '+ s.active}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
      <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Dimych" id="1" />
          <DialogItem name="Andrey" id="2" />
          <DialogItem name="Ivan" id="3" />
          <DialogItem name="Denis" id="4" />
          <DialogItem name="Sveta" id="5" />
          <DialogItem name="Viktor" id="6" />
        </div>
        <div className={s.messages}>
          <Message message="Hi" />
          <Message message="How is your it-kamasutra" />
          <Message message="Yo!" />
          <Message message="Yo!" />
          <Message message="Yo!" />
        </div>
    </div>
  )
}

export default Dialogs
