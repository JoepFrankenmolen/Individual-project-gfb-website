import Login from './User/Login.js';
import Navbar from './Nav/Navbar.js'
import Container from './Container';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import "./../../css/general.css"
import axios from 'axios';

//https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const App = ()=> {
    //const[isShowed,setShow] = useState(true)
  const [isOpen, setIsOpen] = useState(false);

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
 
  const toggleLogin = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    fetchData({
      method: 'get',
      url: ('/post/getall/null'),
    });
  }, []);

 const filter=(filter)=>{
   if(filter.trim() === "")
   {
    filter = "null"
   }
   else if(filter !== null)
   {
      filter = filter
   }
   else{
      filter = "null"
   }


   fetchData({
    method: 'get',
    url: ('/post/getall/'+ filter),
  });
}

  return (
    <div className="app">
      <Router>
        {isOpen && 
          <Login
            handleClose={toggleLogin}
          />
        }
      
        <Navbar
          toggleLogin={toggleLogin}
          filter={filter}
        />
        <Container 
          response={response}
          error={error}
          loading={loading}
        />
        {/* <div className="body">
          {sideNavbar()}
          <div className="body_child" className="body_child_main">
            <ContentContainer/>
          </div>         
        </div> */}
      </Router>
    </div>
  );
}

export default App;
