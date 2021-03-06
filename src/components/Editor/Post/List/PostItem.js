import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

const PostItem = (props) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function postDetails(){
        history.push("/posts-details/"+props.post.postId); 
    }

    function refresh()
    {
        window.location.reload()
    }

    async function publish()
    {
        const params = {
            method: 'put',
            url: '/post/publish/'+props.post.postId,
            headers: {
            Authorization: sessionStorage.getItem("token"),
        },
        }

        setLoading(true);
        try {
            const res = await axios.request(params);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);  
            refresh()
        }
        
    }

    function toggleActive()
    {
        // let config = {
        //     headers: {
        //         'Authorization': sessionStorage.getItem("token"),
        //     }
        // }
        // axios.put(process.env.REACT_APP_POST+"/publish/"+props.post.postId,config)
        // does nothing lol
        refresh()
    }

    let visible = {}
    let margin = {}

    if(props.post.active)
    {
        visible = {display:"none"}
        margin = {marginLeft:"auto"}
    }

    return(
        <div className='editor-post-item-container'>
            <div className='editor-post-item'>
                <div className="editor-post-title-container">
                    <h2 className="editor-post-title">title: {props.post.title}</h2>
                    <a className="editor-post-published">published: {props.post.active.toString()}</a>
                </div>
            </div>
            <div className='editor-post-button editor-post-button-margin'style={visible}>
                <b className='editor-post-button-text' onClick={publish}>publish post<MdArrowForwardIos className='post-content-more-icon'/> </b>
            </div>
            <div className='editor-post-button' style={margin}>
                <b className='editor-post-button-text ' onClick={postDetails}>open post<MdArrowForwardIos className='post-content-more-icon'/> </b>
            </div>
            {/* <div className='editor-post-button'>
                <b className='editor-post-button-text' onClick={toggleActive}>{props.post.active.toString()}<MdArrowForwardIos className='post-content-more-icon'/> </b>
            </div> */}
        </div>        
    )
}


export default PostItem;