const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'post 1', likesCount: 12},
        {id: 2, message: 'post 2', likesCount: 11},
        {id: 3, message: 'post 3', likesCount: 5}
      ],
      newPostText: ''
    },
    messagesPage: {
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
    },
    sidebar: {
      friends:[
        {
          id: 1,
          name: 'Sveta',
          image: ''
        },
        {
          id: 2,
          name: 'Ivan',
          image: ''
        },
        {
          id: 3,
          name: 'Max',
          image: ''
        }
      ]
    }
  },
  _callSubscriber () {},

  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },

  dispatch (action) { // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody
      this._state.messagesPage.newMessageBody = ''
      this._state.messagesPage.messagesData.push({id: 6, message: body});
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default store;
window.state = store;
