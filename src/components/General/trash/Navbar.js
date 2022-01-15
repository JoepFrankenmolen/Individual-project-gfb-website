import React from "react"
import './../../css/navbar.css'
import logo from "./../../media/logo.png"
import {GiHamburgerMenu} from "react-icons/gi"
import accountIcon from "./../../media/account-icon.png"
import Searchbar from "../Nav/Searchbar"
import agenda from "./../../media/agenda.png"
import { Link } from "react-router-dom"

const Navbar = props => 
{
  const filter = () =>
  {

  }



  //atm totaly not okay with the filter with how it works but thats for alter
  return (
    <nav class="navbar">
      {/*needs to be a button but for later */}
      <div className="sideNavBarMenu" onClick={props.hamburgerClicked}>
        <GiHamburgerMenu size={30} color="white"/>
      </div>
      
      <Link to=""><img src={logo} alt="logo" class="logo"/></Link>

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