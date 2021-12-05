import React from 'react';
import {FaUser} from "react-icons/fa"
import {BsCalendar3}from "react-icons/bs"
import {HiUserGroup} from "react-icons/hi"


  //{/*onClick={() => props.getGroupDetails(props.group.id)}*/}
const PostItem = props => {

    const picture = () =>{
        //I dont like this lol
        if(props.post.picture.pictureId != -1)
        {
            return(
                <div className="post_picturediv">
                    <img src={props.post.picture.url} alt={props.post.picture.name} className="post_picture" />
                </div>
            )
        }
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
                {/* {picture()} */}
                <div className="post_content">
                    <div className="post-picture">
                        <img src={props.post.picture.url} alt={props.post.picture.name} className="post-image" />
                    </div>
                    <div className="post-content-text">
                        <a>{props.post.content}</a>
                    </div>
                    
                    {/*<b>{props.group.name}</b><br />
                    <a>category: {props.group.category}</a><br />
                    <a>is active: {props.group.active.toString()}</a>*/}
                </div>
            </div>
        </div>        
    )
}


export default PostItem;