import React, { useState} from 'react';
import './navbar.css'
import logo from "./../../../media/logo.png"
import accountIcon from "./../../../media/account-icon.png"
import Searchbar from "./Searchbar"
import agenda from "./../../../media/agenda.png"
import { Link } from "react-router-dom"

const Navbar = props => 
{
  const filter = () =>
  {

  }

//    <div></div>

  //atm totaly not okay with the filter with how it works but thats for alter
  return (
    <nav class="navbar">
        <div className="slideshow">
            <div className="logo">
                <Link to=""><img src={logo} alt="logo" class="logo"/></Link>
            </div>
            <div className="tabs">
                <Link to=""><h2>test</h2></Link>
                <Link to=""><h2>test</h2></Link>
                <h2 onClick={props.toggleLogin}>test</h2>
            </div>
        </div>
        <div className="navigation">
            <div className="navigation-item"></div>
            <div className="searchbar"></div>
        </div>

      <Searchbar filter={filter}/>
      <a className="red">this is a prototype website. everything will be changed</a>
      <div class="agenda">
        <Link to="/agenda"><img src={agenda} alt="agenda" class="agenda"/></Link>
      </div>

      <Link to="/myAccount"><img src={accountIcon} alt="account" class="accountIcon"/></Link>
      
  </nav>
  )
}

export default Navbar