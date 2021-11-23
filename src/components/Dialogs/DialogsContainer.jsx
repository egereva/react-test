import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
            const state = store.getState().messagesPage
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return  (<Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                              sendMessageCreator={onSendMessageClick}
                              messagesPage={state} />)
        }
    }
    </StoreContext.Consumer>
    )

}

export default DialogsContainer
