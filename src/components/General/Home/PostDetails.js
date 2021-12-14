import React from "react"
import './postDetails.css';
import useAxios from "../UseAxios";

const PostDetails = () => {

    var id = window.location.pathname.replace("/posts-details/","")

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
      url: '/posst/'+ id,
    }); 


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
            <div className="post-container">

            </div>   
          </div>
        )
    }
}

export default PostDetails