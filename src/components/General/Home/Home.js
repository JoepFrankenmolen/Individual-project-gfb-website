import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostList from './PostList';
import "./../../../css/General/home.css"
import useAxios from './../UseAxios';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Home = (props) => {



  const postContent = () =>{

    if(props.response === null && props.error === null && props.loading ===false)
    {
    }

    if(props.error != null)
    {
      return(
        <div className="post-center">
            <a>Error loading posts</a>
        </div>
      )
    }
    else if(props.loading)
    {
      return(
        <div className="post-center">
            <a>Loading posts</a>
        </div>
      )
    }
    
    else if(props.response !== null)
    {
      if(props.response.length === 0)
      {
        return(
          <div className="post-center">
              <a>No posts found</a>
          </div>
        )
      }
      else
      {
        return(
          <PostList
            posts={props.response}
          />
        )
      }
    }
  }

  return (
  <div className="home">
    <div className="posts">
      {postContent()}
    </div>
    <div className="information">

    </div>
  </div>
  )
}

export default Home;