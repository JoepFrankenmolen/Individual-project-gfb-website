import Navbar from './Navbar'
import SideNavbar from './SideNavbar';
import ContentContainer from './ContentContainer';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState} from 'react';
import "./../../css/App.css"


function App() {

  const[isShowed,setShow] = useState(true)

  const hamburgerClicked = () =>{
    setShow(!isShowed)
  }
  //kan beter maar is goed genoeg voor nu

  const sideNavbar = () =>{
    if(isShowed == true)
    {
      return(
        <div className="body_child">
              <SideNavbar/>
        </div>
      )
    }
  }

  return (
    <div className="main_body">
      <Router>
        <Navbar
          hamburgerClicked={hamburgerClicked}
        />
        <div className="body">
          {sideNavbar()}
          <div className="body_child" className="body_child_main">
            <ContentContainer/>
          </div>         
        </div>
      </Router>
    </div>
  );
}

export default App;
