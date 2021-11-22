import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;
