import { Link } from "react-router-dom"
import React from 'react';
import { v4 as uuidv4 } from "uuid";
import "./../../css/sideNavbar.css"

//mapping this is way easyied also the admin and normal nav are not the same
    //todo:

const SideNavbar = () => {

  React.state = {
    navItems:[
      {
        id: uuidv4(),
        class:"home",
        name:"home",
        route:"/"
      },
      {
        id: uuidv4(),
        class:"home",
        name:"agenda",
        route:"/agenda"
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"admin",
        route:"/admin"
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"users",
        route:"/admin/users"
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"groups",
        route:"/admin/groups"
      }
    ]
  }

  return (
    <nav class="sideNavbar">
      <ul class="nav-links">
        {React.state.navItems.map(nav =>(
          <li class="nav-item">
            <Link to={nav.route}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavbar