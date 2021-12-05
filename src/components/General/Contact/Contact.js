import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./../../../css/General/home.css"
import { useAxios } from 'use-axios-client';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Contact = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
      setLoading(true);
      try {
      const res = await axios.get("/post");
      setResponse(res.data);
      setError(null);
      } catch (err) {
      setError(err);
      } finally {
          
      setLoading(false);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);


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
        // <PostList
        //   posts={response}
        // />
        <div></div>
      )
    }
  }

  return (
  <div className="home">
    <div className="posts">
    </div>
    <div className="information">

    </div>
  </div>
  )
}

export default Contact;