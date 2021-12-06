import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostList from './PostList';
import "./../../../css/General/home.css"
import useAxios from './../UseAxios';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Home = () => {

  const { response, error, loading } = useAxios({
    method: 'get',
    url: '/post',
  });


  const postContent = () =>{

    if(response === null && error === null && loading ===false)
    {
    }

    if(error != null)
    {
      return(
        <div className="post-center">
            <a>Error loading posts</a>
        </div>
      )
    }
    else if(loading)
    {
      return(
        <div className="post-center">
            <a>Loading posts</a>
        </div>
      )
    }
    else if(response !== null)
    {
      return(
        <PostList
          posts={response}
        />
      )
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