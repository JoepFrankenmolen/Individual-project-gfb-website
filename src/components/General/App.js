import Navbar from './Nav/Navbar.js'
import SideNavbar from './SideNavbar';
import ContentContainer from './Container';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState} from 'react';
import "./../../css/general.css"
import Login from './User/Login.js';


function App() {

  //const[isShowed,setShow] = useState(true)
  const [isOpen, setIsOpen] = useState(true);
 
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
      {/* <div>
      <input
      type="button"
      value="Click to Open Popup"
      onClick={toggleLogin}
    />
      </div> */}
        <Navbar
          toggleLogin={toggleLogin}
          // hamburgerClicked={hamburgerClicked}
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
