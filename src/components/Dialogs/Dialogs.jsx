import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.messagesPage
    const dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = state.messagesData.map(message => <Message message={message.message}/>);
    const NewMessageBody = state.newMessageBody;
    const onSendMessageClick = () => {
        props.sendMessageCreator()
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={NewMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}
                                   name="" id="" cols="30" rows="10"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
