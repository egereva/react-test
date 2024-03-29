const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Denis'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Viktor'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo! Yo!'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer
