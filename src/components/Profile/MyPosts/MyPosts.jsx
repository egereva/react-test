import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postsData = [
        {id: 1, message: 'post 1', likesCount: 12},
        {id: 2, message: 'post 2', likesCount: 11},
        {id: 3, message: 'post 3', likesCount: 5}
    ]

    const postsElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
}

export  default  MyPosts
