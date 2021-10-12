import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {

//the bogayman is the navlink dont use href lmao
  return (
    <nav class="navbar">
    <a href="" class="logo">
      {/*<img src="" alt="logo">*/}
    </a>
    <ul class="nav-links">
      <li class="nav-item"><a href="users">Users</a></li>
      <li class="nav-item"><a href="groups">Groups</a></li>
    </ul>
  </nav>
    
  )
}

export default Navbar