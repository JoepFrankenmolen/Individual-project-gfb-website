import Login from './User/Login.js';
import Navbar from './Nav/Navbar.js'
import Container from './Container';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState} from 'react';
import "./../../css/general.css"


function App() {

  //const[isShowed,setShow] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleLogin = () => {
    setIsOpen(!isOpen);
  }

  // const hamburgerClicked = () =>{
  //   setShow(!isShowed)
  // }
  // //kan beter maar is goed genoeg voor nu

  // const sideNavbar = () =>{
  //   if(isShowed == true)
  //   {
  //     return(
  //       <div className="body_child">
  //             <SideNavbar/>
  //       </div>
  //     )
  //   }
  // }

  return (
    <div className="app">
      {isOpen && 
        <Login
          handleClose={toggleLogin}
        />
      }
      <Router>
        <Navbar
          toggleLogin={toggleLogin}
        />
        <Container 
        
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
