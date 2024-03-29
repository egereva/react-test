import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange =  () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
}

export  default  MyPosts
