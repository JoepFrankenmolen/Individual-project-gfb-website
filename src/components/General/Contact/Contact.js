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
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2VwLmZyYW5rZW5tb2xlbnNwYW1AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiZXhwIjoxNjM5NTgyODM5fQ.Xb_aWIWQVyNRmk23vVvzowa99-SU7nX9z90W915UPJj0dwOuUa-36FoR_8rC1o4XDuVlh1sotuh6eLWpRzpW4A',
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