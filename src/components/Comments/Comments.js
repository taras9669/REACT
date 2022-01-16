import React, {useEffect, useState} from 'react';
import Comment from "./Comment";


const Comments = () => {
    const [commentList, setCommentList] = useState([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setCommentList(value))
    }, [])
    return (
        <div className="CommentBox">
            {commentList.map(value => <Comment key={value.postId} postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body}/>)}
        </div>
    );
}

export default Comments;