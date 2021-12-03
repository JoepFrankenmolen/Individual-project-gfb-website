import React, {useState} from 'react';
import './../../../css/General/navbar.css'
import logo from "./../../../media/logo.png"
import Searchbar from "./Searchbar"
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom"
import {RiArrowDropDownLine} from "react-icons/ri"

const Navbar = props => 
{
    const [isVisible, setIsVisible] = useState(false);

    const shown = {
        display:"inline"
    }

    const hidden = {
        display:"none"
    }

    React.state = {
        navItems:[
          {
            id: uuidv4(),
            class:"home",
            name:"Home",
            route:"/",
            isActive:false
          },
          {
            id: uuidv4(),
            class:"home",
            name:"Agenda",
            route:"/agenda",
            isActive:false
          },
          {
            id: uuidv4(),
            class:"speltakken",
            name:"Groupbranches",
            route:"/speltakken",
            isActive:false
          },
          {
            id: uuidv4(),
            class:"fotoalbum",
            name:"Picturebook",
            route:"/fotoboek",
            isActive:false
          },
          {
            id: uuidv4(),
            class:"contact",
            name:"Contact",
            route:"/contact",
            isActive:false
          }
        //   {
        //     id: uuidv4(),
        //     class:"editor",
        //     name:"editor",
        //     route:"/editor",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"editor",
        //     name:"my-posts",
        //     route:"/myPosts",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"admin",
        //     name:"admin",
        //     route:"/admin",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"admin",
        //     name:"users",
        //     route:"/admin/users",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"admin",
        //     name:"groups",
        //     route:"/admin/groups",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"admin",
        //     name:"pictures",
        //     route:"/admin/pictures",
        //     isActive:false
        //   },
        //   {
        //     id: uuidv4(),
        //     class:"admin",
        //     name:"posts",
        //     route:"/admin/posts",
        //     isActive:false
        //   }
        ]//this sucks
      }
    
    const clicked = nav =>  {
    nav.isActive = true
    return nav.route
    }

    const filter = () =>
    {

    }

    const dropIcon = () =>
    {
        return "inline"
    }

    const toggleDropIcon = () =>
    {
        setIsVisible(!isVisible)
    }

    //todo fix the slideshow
    //https://storage.googleapis.com/pictures-gfb/3-2021regenboog.png
    return (
        <nav class="navbar">
            <div className="slideshow">
                <div className="overlay">
                    <div className="logo">
                        <Link to=""><img src={logo} alt="logo" class="logo"/></Link>
                    </div>
                    <div className="tabs">
                        <div className="individual-tab" >
                            <Link to="" className="nav-link" ><h2>Home</h2></Link>
                        </div>
                        <div className="individual-tab">
                            <Link to="/member" className="nav-link" ><h2>Become a member</h2></Link>
                        </div>
                        <div className="individual-tab">
                            <h2 onClick={props.toggleLogin}>Log in/Register</h2>
                        </div>
                    </div>
                </div>
                {/* <img className="nav-pictures" src="https://storage.googleapis.com/pictures-gfb/3-2021regenboog.png" alt="img"/> */}
            </div>
            <div className="navigation">
                <div className="navigation-list">
                    {React.state.navItems.map(nav =>(
                        <div className ="navigation-item" >
                            {/* {test(nav.class)}  find a way to store all the dropdown menu items*/}
                            <Link to={clicked(nav)} className="remove-decoration navigation-link" {...Link/* onMouseIn={toggleDropIcon} onMouseOut={toggleDropIcon} */} > 
                                <div className="inner-nav-div">
                                    <a className="nav-item-link">{nav.name}</a>
                                    {/*idk about this icon tho will see */}
                                    {/* <RiArrowDropDownLine style={isVisible ? shown : hidden} size="35px" className="drop-down-icon"/> */}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="navigation-searchbar"></div>
                <div className="inner-navigation-searchbar">
                    <Searchbar filter={filter}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar