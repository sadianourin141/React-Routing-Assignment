import React from 'react';
import { Link } from 'react-router-dom';
import "./Post.css";
import Button from 'react-bootstrap/Button';

const Post = (props) => {
    const {title,id,body}=props.post;
   
    return (
        <div className="post">
            <h2>Title:{title}</h2>
            <p>{body}</p>
            <Link to={`/About/${id}`}><Button variant="primary">Read More</Button></Link>
            
            
        </div>
    );
};

export default Post;