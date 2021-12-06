import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./../../../css/General/home.css"
import useAxios from './../UseAxios';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Contact = () => {

    //load user here using some kind of magic
    const [isVisible, setIsVisible] = useState(false);

    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/con',
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
  


  const ContactMessages = () =>{

    if(response === null && error === null && loading ===false)
    {
    }

    if(error != null)
    {
        console.log("error")
      return(
        <div className="post-center">
            <a>Error loading converstations</a>
        </div>
      )
    }
    else if(loading)
    {
        console.log("loading")
      return(
        <div className="post-center">
            <a>Loading converstations</a>
        </div>
      )
    }
    else if(response !== null)
    {
        console.log(response)
      return(
        // <PostList
        //   posts={response}
        // />
        <div></div>
      )
    }
  }

  return (
  <div className="contact">
    <div className="conversations">
        {ContactMessages()}
    </div>
    <div className="chat">

    </div>
  </div>
  )
}

export default Contact;