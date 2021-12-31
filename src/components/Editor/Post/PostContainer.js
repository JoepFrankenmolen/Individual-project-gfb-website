import React, {useState} from "react"
import {useHistory } from "react-router-dom"
import "./post.css"

import PostCreate from "./PostCreate"
import PostList from "./List/PostList"

const PostContainer = () =>{
    const history = useHistory();
    
    return(
        <div className="editor-post-container">
            <PostCreate/>
            <div className="vl"></div>
            <PostList/>
        </div>
    )

}

export default PostContainer