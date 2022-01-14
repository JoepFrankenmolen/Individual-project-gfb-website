import React, {useState} from "react"
import {useHistory } from "react-router-dom"
import "./editor.css"

import PostCreate from "./PostCreate"
import PostList from "./List/PostList"

const PostContainer = () =>{
    const history = useHistory();
    
    return(
        <div className="editor-post-container">
            <PostCreate/>
            <PostList/>
        </div>
    )

}

export default PostContainer