import React from 'react';
import './post.css';


const Post = (props) => {
    const {userId, id, title, body,} = props;

    return (
        <div className="PostDiv">
            <div>USERID:{userId}</div>
            <div>ID:{id}</div>
            <div>TITLE:{title}</div>
            <div>BODY:{body}</div>
            <br></br>
        </div>
    );
};

export default Post;