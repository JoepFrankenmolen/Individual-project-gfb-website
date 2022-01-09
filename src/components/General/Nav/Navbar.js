import React, {useState} from 'react';
import './../../../css/General/navbar.css'
import logo from "./../../../media/logo.svg"
import Searchbar from "./Searchbar"
import { v4 as uuidv4 } from "uuid";
import {useHistory } from "react-router-dom"
import accountIcon from "./../../../media/account-icon.png"
import Dropdown from './Dropdown/Dropdown';
import useAxios from '../UseAxios';

const Navbar = props => 
{
    const [userName, setUserName] = useState(fetchUser());
    const history = useHistory();
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/group/speltak/category',
    }); 

    const groups = () =>{
        const groups = []
        response.forEach(element => {
            groups.push((
                {
                    id:element.id,
                    title:element.name,
                    route:"/speltak/" + element.name
                }
            ))
        })
        return groups
    }

    

    function fetchUser(){
        let username = sessionStorage.getItem("name")
        if(sessionStorage.getItem("token") !== null && username !== null)
        {
            return username
        }
        return null
        
    }

    async function logOut(){
        sessionStorage.clear()
        history.push("");
        window.location.reload(false);
    }
    
    const redirect = (link) =>  {
        history.push(link); 
    }

    const dropdownMenu = () =>{
        if(response !== null)
        {
            //in the furute this will be fecthed from the backend
            const navItems = 
            [
                {
                    id: uuidv4(),
                    title:"Home",
                    route:"/",
                    subPages:
                    [
                        {
                            id: uuidv4(),
                            title:"agenda",
                            route:"/agenda",
                        },
                        {
                            id: uuidv4(),
                            title:"membership",
                            route:"/member",
                        },
                        {
                            id: uuidv4(),
                            title:"internship",
                            route:"/intern",
                        },
                        {
                            id: uuidv4(),
                            title:"scoutfit",
                            route:"/scoutfit",
                        },
                        {
                            id: uuidv4(),
                            title:"social security",
                            route:"/sc",
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    title:"Groupbranches",
                    route:"/speltak",
                    subPages: groups()
                },
                {
                    id: uuidv4(),
                    title:"Picturebook",
                    route:"/fotoboek",
                    subPages:
                    [
                        {//you can select a year but it is nowhere near implemented yet it will be fetched from the api
                            id: uuidv4(),
                            title:"2016",
                            route:"/fotoboek/2016",
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    title:"contact",
                    route:"/contact",
                    subPages:
                    [
                        {
                            id: uuidv4(),
                            title:"chat",
                            route:"/contact/chat",
                        }
                    ]
                },
                {//in the furute this will be an api call and I will just feed you back to what you have premmision to  so this wont show as well as the admin section
                    id: uuidv4(),
                    title:"editor",
                    route:"/editor",
                    subPages:
                    [
                        {
                            id: uuidv4(),
                            title:"post",
                            route:"/editor/post",
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    title:"admin",
                    route:"/admin",
                    subPages:
                    [
                        {
                            id: uuidv4(),
                            title:"groups",
                            route:"/admin/groups",
                        },
                        {
                            id: uuidv4(),
                            title:"users",
                            route:"/admin/users",
                        }
                    ]
                }
            ]

            return(
                <Dropdown
                    navItems={navItems}
                />
            )
        }
        else{
            return(
                <a>error</a>
            )
        }
    }

    function slideshowLinks(){
        if(userName !== null)
        {
            return(
            <div className="navbar-slideshow-container">
                <div className="navbar-slideshow-link" onClick={() => redirect("")}>
                    <h2 className='navbar-slideshow-link-text'>Home</h2>
                </div>
                <div className="navbar-slideshow-link" onClick={() => redirect("/member")}>
                    <h2 className='navbar-slideshow-link-text'>Become a member</h2>
                </div>
                <div className="navbar-slideshow-link" onClick={logOut}>
                    <h2 className='navbar-slideshow-link-text'>Log out</h2>
                </div>
                <div className="navbar-slideshow-link navbar-slideshow-link-icon" onClick={()=>redirect('/account')}>
                    <img src={accountIcon} alt="account" class="navbar-slideshow-link-user-icon"/>
                    <h2 className='navbar-slideshow-link-text'>{userName}</h2> 
                </div>
            </div>             
            )
        }
        else
        {
            return(
            <div className="navbar-slideshow-container">
                <div className="navbar-slideshow-link" onClick={() => redirect("")}>
                    <h2 className='navbar-slideshow-link-text'>Home</h2>
                </div>
                <div className="navbar-slideshow-link" onClick={() => redirect("/member")}>
                    <h2 className='navbar-slideshow-link-text'>Become a member</h2>
                </div>
                <div className="navbar-slideshow-link">
                    <h2  className='navbar-slideshow-link-text' onClick={props.toggleLogin}>Log in/Register</h2>
                </div>
            </div>
            )
        }
    }
    

    //todo fix the slideshow
    return (
        <nav class="navbar">
            <div className="navbar-slideshow">
                <div className="navbar-slideshow-overlay">
                    <div className="navbar-slideshow-logo-container" onClick={() => redirect("")}>
                        <img src={logo} alt="logo" class="navbar-slideshow-logo"/>
                    </div>
                   {slideshowLinks()}
                </div>
            </div>
            <div className="navbar-navigation-container">
                <div className="navbar-navigation">
                    {dropdownMenu()}
                </div>
                <div className="navbar-navigation-searchbar">
                    <Searchbar filter={props.filter}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar