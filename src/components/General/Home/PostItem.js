import React from 'react';
import {FaUser} from "react-icons/fa"
import {BsCalendar3}from "react-icons/bs"
import {HiUserGroup} from "react-icons/hi"
import { useHistory } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';


const PostItem = (props) => {

    const history = useHistory();

    function postDetails(){
        history.push("/posts-details/"+props.post.postId); 
    }

    return(
        <div className='post-item-container'>
            <div className='post-item'>
                <div className="post-title-container">
                    <h1 className="post-title">{props.post.title}</h1>
                </div>
                <div className="post-atributes">
                    {/*make it a div so it has a static place so the lenght doesnt matter */}
                    <div className="post-atribute-item post-icon"><FaUser color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Published by: <b>{props.post.author}</b></a></div>
                    <div className="post-atribute-item post-icon"><BsCalendar3 color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Date: {props.post.datePublished}</a></div>
                    <div className="post-atribute-item post-icon"><HiUserGroup color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Group: {props.post.group}</a></div>
                </div>
                {/* the pcitures doesnt resize correctly like if I make the information tab bigger the picture get smaller ojeh and a button for read more*/}
                <div className="post_content">
                    <div className="post-content-picture">
                        <img src={props.post.picture.url} alt={props.post.picture.name} className="post-image" />
                        {/* <a>test</a> */}
                    </div>
                    <div className="post-content-text">
                        <a className='post-content-text-item'>{props.post.content}</a>                        
                    </div>
                </div>
            </div>
            <div className='post-content-more'>
                <b className='post-content-more-text' onClick={postDetails}>read more <MdArrowForwardIos className='post-content-more-icon'/> </b>
            </div>
            
            {/* this is such a bad practice */}
            {/* <div className="post-readmore" >
                <div className="readmore-button" onClick={postDetails}>
                    <a>read more</a>
                </div>
            </div> */}
        </div>        
    )
}


export default PostItem;