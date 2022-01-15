import React from "react"
import './postDetails.css';
import useAxios from "../UseAxios";
import {FaUser} from "react-icons/fa"
import {BsCalendar3}from "react-icons/bs"
import {HiUserGroup} from "react-icons/hi"

const PostDetails = () => {

    var id = window.location.pathname.replace("/posts-details/","")

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
      url: '/post/'+ id,
    }); 

    const picture = () =>{
      if(response.hasOwnProperty("picture"))
      {
        return (
          <img src={response.picture.url} alt={response.picture.name} className="post-body-picture" />
        )
      }      
    }

    if(response === null && error === null && loading ===false)
    {
        return(
          <div className="post-details">
            <div className="post-response center">
              <a>loading posts</a>
            </div>
          </div>
        )
    }

    if(error != null)
    {
        return(
          <div className="post-details">
            <div className="post-response center">
              <a>error loading posts</a>
            </div>
          </div>
        )
    }
    else if(loading)
    {
        return(
          <div className="post-details">
            <div className="post-response center">
              <a>loading posts</a>
            </div>      
          </div>
        )
    }
    else if(response !== null)
    { 
        return(
          <div className="post-details">
            <div className="post-details-container">
              <div className="post-details-box">
                <div className="post-title-container">
                  <h1 className="post-title">
                    {response.title}
                  </h1>
                </div>
                <div className="post-body">
                  {picture()}
                  <p className="post-body-text">
                    {response.content}
                  </p>
                </div>
              </div>
              <div className="post-information-container center">
                <div className="post-information-box">
                  <div className="post-information-pair">
                    <div className="post-atribute-item post-icon"><FaUser color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Published by: <b>{response.author}</b></a></div>
                  </div>
                  <div className="post-information-pair">
                    <div className="post-atribute-item post-icon"><BsCalendar3 color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Date: {response.datePublished}</a></div>
                  </div>
                  <div className="post-information-pair">
                    <div className="post-atribute-item post-icon"><HiUserGroup color="green" /></div>
                    <div className="post-atribute-text"><a className="post-atributes-text">Group: {response.group}</a></div>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        )
    }
}

export default PostDetails