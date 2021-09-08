import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>
                <Post message='post 1' likesCount='0'/>
                <Post message='post 2' likesCount='23'/>
                <Post message='post 3' likesCount='5'/>
            </div>
        </div>
}

export  default  MyPosts
