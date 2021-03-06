import React, { useState} from 'react';
import axios from 'axios';
import './../../../css/General/login.css'
import {Router, useHistory } from "react-router-dom"
// import { Redirect } from 'react-router';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Login = props => 
{
    const [userCredentials,setCredentials] = useState({
        email :"",
        password : ""
    });

    const history = useHistory();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // const [count, setCount] = useState(3);

    const errorStyle = {
        color:"red"
    } 

    const fetchData = async (params) => {
        setLoading(true);
        try {
        const res = await axios.post("/login",params);
        setResponse(res.data);
        setError(null);
        } catch (err) {
        setError(err);
        } finally {
            
        setLoading(false);
        }
    };

    
    const axiosDataResponse = () =>{
        if(response === null && error === null && loading ===false)
        {
            return (
                <br/>
                );
        }
        var feedback = "";
        if(error !== null)
        {
            feedback = "Log in failed"
        }
        else if(loading)
        {
            feedback = "Loading..."
        }
        else if(response !== null)
        {
            // countdown();
            feedback = "log in successful. "//"closing in: " + count
            setUserData()
        }

        return(
            <div className="feedback">
                <a>{feedback}</a>
            </div>
        )
    }

    const setUserData = () =>{
        console.log(response)
        sessionStorage.setItem("token",response.Authorization)
        sessionStorage.setItem("name",response.name)
        sessionStorage.setItem("userId",response.userId)
        sessionStorage.setItem("role",response.role)
        sessionStorage.setItem("groups",JSON.stringify(response.groups))
        countdown();
    }

    function Login(event){
        event.preventDefault();
        // console.log(userCredentials.email + " "+
        //     userCredentials.password)
        if(userCredentials.password === "" && userCredentials.password === "")
        {
          setEmailError("*Enter your E-mail addres")
          setPasswordError("*Enter your Password")
        }
        else if(userCredentials.email === "")
        {
            setEmailError("*Enter your E-mail addres")
        }
        else if(userCredentials.password === "")
        {
            setPasswordError("*Enter your Password")
        }
        
        else{
            var params = {
                email:userCredentials.email,
                password:userCredentials.password,
            }
            
            setResponse(null)
            setError(null)
            setLoading(null)
            fetchData(params);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function countdown(){
        // for (let i = 3; i > 0; i--) {
        //     setCount(i)
        //     await sleep(3000);
        //     console.log("test")
        // }
        // props.handleClose()
        await sleep(500);
        window.location.reload(false);
    }

    function Register(event){
        event.preventDefault();
        history.push("/register");
        props.handleClose()
    }

    const onChange = e => {
        setCredentials({
          ...userCredentials,
          [e.target.name]: e.target.value,
        })
      }

    const empty = e =>{
        e.stopPropagation();
    }

  return (
    <div className="popup-login" onClick={props.handleClose}>
      <div className="box" onClick={empty}>
        <div className="close-icon" onClick={props.handleClose}>x</div>
        <div className="top">
            <h1 className="Login-h1">Log in</h1>
            <a className="Login-information">Log in using your email or register by clicking the register button</a><br/>
        </div>
        <div className="forms">
            <form onSubmit={Login} className="login-form">
                <label htmlFor="email" className="login-label">E-mail address:</label>
                <input 
                    type="text" 
                    id="email" 
                    className="login-text" 
                    value={userCredentials.email}
                    name="email" 
                    placeholder="E-mail.."
                    onChange={onChange}
                />
                <p className="error-login">{emailError}</p><br/>
                <label htmlFor="password" className="login-label">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    className="login-text" 
                    value={userCredentials.password}
                    name="password" 
                    placeholder="Password.."
                    onChange={onChange}
                />
                <p className="error-login">{passwordError}</p>
                <div className="axios-response" style={error !=null ? errorStyle : null}>
                    {axiosDataResponse()}
                </div>
                    
                <div className="submit">
                    <input type="submit"className="login-submit" value="Login"/>
                </div>
            </form> 
            <form onSubmit={Register} className="register-form">
                <div className="submit">
                    <input type="submit" className="register-submit"  value="Register"/>
                </div>
            </form> 
        </div>
      </div>
    </div>
  );
};
 
export default Login;