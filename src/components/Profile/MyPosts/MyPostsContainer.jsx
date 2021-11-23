import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                const onPostChange =  (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return  (< MyPosts
                            updateNewPostText = {onPostChange}
                            addPost = {addPost}
                            postsData = {state.profilePage.postsData}
                            newPostText = {state.profilePage.newPostText}
                />)
            }
        }
        </StoreContext.Consumer>
    )
}

export  default  MyPostsContainer
