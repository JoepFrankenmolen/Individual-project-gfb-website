import { Link } from "react-router-dom"
import React , { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import "./../../css/sideNavbar.css"

//mapping this is way easyied also the admin and normal nav are not the same
    //todo:

const SideNavbar = () => {

  var pastClass = "";   

  React.state = {
    navItems:[
      {
        id: uuidv4(),
        class:"home",
        name:"home",
        route:"/",
        isActive:false
      },
      {
        id: uuidv4(),
        class:"home",
        name:"agenda",
        route:"/agenda",
        isActive:false
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"admin",
        route:"/admin",
        isActive:false
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"users",
        route:"/admin/users",
        isActive:false
      },
      {
        id: uuidv4(),
        class:"admin",
        name:"groups",
        route:"/admin/groups",
        isActive:false
      }
    ]
  }

  const isActiveStyle = {
    backgroundColor: "hsl(120, 84%, 22%)"
  }


  //for in the future I can show where you are also add some sort of usestate to the nav stuff if you want this to work
  const clicked = nav =>  {
    nav.isActive = true
    return nav.route
  }

  const test = navClass =>{
    if(pastClass != navClass)
    {
      pastClass = navClass
      return <hr/>
    }
  }

  return (
    <nav class="sideNavbar">
      <ul class="nav-links">
        {React.state.navItems.map(nav =>(
          <div>
            {test(nav.class)}
            <li class="nav-item" style={nav.isActive ? isActiveStyle : null}>
              <Link to={clicked(nav)}  className="nav-item-link">{nav.name}</Link>
            </li>
          </div>
        ))}
        <hr/>
      </ul>
    </nav>
  )
}

export default SideNavbar