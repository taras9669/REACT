import React, {useEffect, useState} from 'react';
import Post from "./Post";


const Posts = () => {
    const [postsList, setPostsList] = useState([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPostsList(value))
    }, [])
    return (
        <div className="PostBox">
            {postsList.map(value => <Post key={value.id} userId={value.userId} id={value.id} title={value.title} body={value.body} />)}
        </div>
    );
}

export default Posts;