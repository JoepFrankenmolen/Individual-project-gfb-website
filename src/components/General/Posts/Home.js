import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostList from './PostList';
import Error404 from '../PageNotFound';
import "./../../../css/home.css"

const Home = () => {

  const baseURL = "http://localhost:8080/post"

  const [posts,setPosts] = useState(null);

  useEffect(() => 
    {
      setPostsAxios(baseURL);
    }, []);

  const setPostsAxios = url =>
  {
    axios.get(url).then((response) => 
    {
      setPosts(response.data);
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