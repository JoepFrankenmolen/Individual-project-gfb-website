import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./contact.css";
// import "./../../../css/General/home.css"
import useAxios from './../UseAxios';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

{/* <optgroup label="Swedish Cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</optgroup>
<optgroup label="German Cars">
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</optgroup> */}

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

    return(
      <div className="chose-chat-box center">
          <form action="/action_page.php">
            <label for="cars">Chose a group to chat with:</label>
            <select name="cars" id="cars">
              <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </optgroup>
              <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </optgroup>
            </select>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )

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
    <div className="contact-messaging">
      <div className="start-chat center">
          {ContactMessages()}
      </div>
      <div className="chat-options">

      </div>
      <div className="chat">

      </div>
    </div>
  </div>
  )
}

export default Contact;