import React, {useState} from "react"
import {Router, useHistory } from "react-router-dom"
import axios from "axios";

const Register = () => {

    const history = useHistory();
    const [once,setOnce] = useState(false);

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [nameError, setNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [pasword_backupError, setPassword_backupError] = useState("");

    const errorStyle = {
        color:"red"
    } 

    const [userDetails,setUserDetials] = useState({
        name :"",
        username :"",
        email :"",
        password :"",
        password_backup : "",
        phonenumber :""
    });

    const goBack = () =>{
        if(sessionStorage.getItem("token") !== null && once === false)
        {
            setOnce(true)
            history.goBack()
        }
    }
    
    const onChange = e => {
        setUserDetials({
            ...userDetails,
            [e.target.name]: e.target.value,
        })
    }

    const axiosDataResponse = () =>{

    }

    async function register(event){
        event.preventDefault();

        if(userDetails.name === "")
        {
            setNameError("*enter a name")
        }
        if(userDetails.username === "")
        {
            setUsernameError("*enter a username")
        }
        if(userDetails.email === "")
        {
            setEmailError("*enter a email")
        }
        if(userDetails.password === "")
        {
            setPasswordError("*enter a password")
        }
        if(userDetails.password === "")
        {
            setPassword_backupError("*enter a password")
        }

        if(userDetails.password !== "" && userDetails.password_backup !== "" && userDetails.email !== "" && userDetails.username !== "" && userDetails.name !== "" && userDetails.password === userDetails.password_backup)
        {
            const params = {
                method: 'post',
                url: '/user/register',
                data:{
                    name:userDetails.name,
                    username:userDetails.username,
                    email:userDetails.email,
                    password:userDetails.password
                }
            }
            
            setLoading(true);
            try {
                const res = await axios.request(params);
                setResponse(res.data);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
                window.location.reload(false)
                history.push("/")
            }
        }
    }

    return(
        <div className="register-container">
            {goBack()}
            <div className="register-box">
                <form onSubmit={register} className="register-form">
                    <label htmlFor="name" className="register-label">name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="register-text" 
                        value={userDetails.name}
                        name="name" 
                        placeholder="Name.."
                        onChange={onChange}
                    />
                    <p className="error-register">{nameError}</p><br/>
                    <label htmlFor="username" className="register-label">your username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="register-text" 
                        value={userDetails.username}
                        name="username" 
                        placeholder="Username.."
                        onChange={onChange}
                    />
                    <p className="error-register">{usernameError}</p><br/>
                    <label htmlFor="email" className="register-label">E-mail address:</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="register-text" 
                        value={userDetails.email}
                        name="email" 
                        placeholder="E-mail.."
                        onChange={onChange}
                    />
                    <p className="error-register">{emailError}</p><br/>
                    <label htmlFor="password" className="register-label">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="register-text" 
                        value={userDetails.password}
                        name="password" 
                        placeholder="Password.."
                        onChange={onChange}
                    />
                    <p className="error-register">{passwordError}</p>
                    <label htmlFor="password-backup" className="register-label">confirm password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="register-text" 
                        value={userDetails.password_backup}
                        name="password_backup" 
                        placeholder="Confirm password.."
                        onChange={onChange}
                    />
                    <p className="error-register">{pasword_backupError}</p>
                    <div className="axios-response" style={error !=null ? errorStyle : null}>
                        {axiosDataResponse()}
                    </div>
                        
                    <div className="submit">
                        <input type="submit"className="register-form-submit" value="register"/>
                    </div>
                </form> 
            </div>
        </div>
    )


}

export default Register