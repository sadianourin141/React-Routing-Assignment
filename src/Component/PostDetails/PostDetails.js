import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import "./PostDetails.css";

const PostDetails = () => {
    const {postId}=useParams();
    const [cmt,setCmt]=useState([]);
    const {email,name,body}=cmt;
    useEffect(()=>{
        const url=(`https://jsonplaceholder.typicode.com/comments/${postId}`)
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCmt(data))

    },[]);
    return (
        <div className="postDetails">
            <h2>Comment-Section</h2>
            <h3>Name:{name}</h3>
            <h4>Email:{email}</h4>
            <p>{body}</p>
            
        </div>
    );
};

export default PostDetails;