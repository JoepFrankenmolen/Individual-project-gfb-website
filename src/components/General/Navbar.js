import React from "react"
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    //mapping this is way easyied also the admin and normal nav are not the same
    //todo:
    <nav class="navbar">
      <a href="" class="logo">
        {/*<img src="" alt="logo">*/}
      </a>

      <ul class="nav-links">
        <li class="nav-item">
          <Link to="/admin/users">Users</Link>
        </li>
        <li class="nav-item"> 
          <Link to="/admin/groups">Groups</Link>
        </li>
      </ul>
  </nav>
  )
}

export default Navbar