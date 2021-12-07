import React from 'react';
import {FaUser} from "react-icons/fa"
import {BsCalendar3}from "react-icons/bs"
import {HiUserGroup} from "react-icons/hi"
import { useHistory } from 'react-router-dom';


const PostItem = (props) => {

    const history = useHistory();

    function postDetails(){
        history.push("/posts-details/"+props.post.postId); 
    }

    return(
        <div className='post-item' >
            <div className="post-item-container">
                <div className="post-title-div">
                    <h1 className="post-title">{props.post.title}</h1>
                </div>
                <div className="post-atributes">
                    {/*make it a div so it has a static place so the lenght doesnt matter */}
                    <div className="post-user post-icon"><FaUser color="green" /></div>
                    <div className="post-text"><a className="post-atributes-item">Published by: <b>{props.post.author}</b></a></div>
                    <div className="post-calender post-icon"><BsCalendar3 color="green" /></div>
                    <div className="post-text"><a className="post-atributes-item">Date: {props.post.datePublished}</a></div>
                    <div className="post-calender post-icon"><HiUserGroup color="green" /></div>
                    <div className="post-text"><a className="post-atributes-item">Group: {props.post.group}</a></div>
                </div>
                {/* the pcitures doesnt resize correctly like if I make the information tab bigger the picture get smaller ojeh and a button for read more*/}
                <div className="post_content">
                    <div className="post-picture">
                        <img src={props.post.picture.url} alt={props.post.picture.name} className="post-image" />
                    </div>
                    <div className="post-content-text">
                        <a>{props.post.content}</a>
                    </div>
                </div>
            </div>
            {/* this is such a bad practice */}
            <div className="post-readmore" >
                <div className="readmore-button" onClick={postDetails}>
                    <a>read more</a>
                </div>
            </div>
        </div>        
    )
}


export default PostItem;