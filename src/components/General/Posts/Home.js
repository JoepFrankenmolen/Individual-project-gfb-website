import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostList from './PostList';
import Error404 from '../PageNotFound';
import "./../../../css/home.css"

const Home = () => {

  const baseURL = process.env.REACT_APP_POST;

  const [posts,setPosts] = useState(null);

  useEffect(() => 
    {
      console.log(baseURL)
      setPostsAxios(baseURL);
      
    }, []);

  const setPostsAxios = url =>
  {
    axios.get(url).then((response) => 
    {
      setPosts(response.data);
    }).catch(error => {
      console.log(error)
    });
  }

  if(posts == null)
  {
    return (
      <Error404
        code={500}
        message={"trying to connect to the server"}
      />
    )
  }

  return (
  <div className="home">
    <div className="posts">
    <PostList
          posts={posts}
      />
    </div>
  </div>
  )
}

export default Home;