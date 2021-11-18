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
      ]
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
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    }
  }
}

export default store;
window.state = store;
