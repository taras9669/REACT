import React from 'react';
import './comment.css';

const Comment = (props) => {
    const {postId, id, name, email, body} = props;

    return (
        <div className="CommentDiv">
            <div>POSTID:{postId}</div>
            <div>ID:{id}</div>
            <div>NAME:{name}</div>
            <div>EMAIL:{email}</div>
            <div>BODY:{body}</div>
            <br></br>
        </div>
    );
};

export default Comment;