import React, {useState} from "react"
import {Router, useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory();
    const [once,setOnce] = useState(false);

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const [userError,setUserError] = useState({
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

    function register(event){
        event.preventDefault();

        if(userDetails.password === "")
        {
            setUserError({...userError,
                password: "*Enter your Password"})
        }

        if(userDetails.password !== "" && userDetails.password_backup !== "" && userDetails.email !== "" && userDetails.username !== "" && userDetails.name !== "" && userDetails.password === userDetails.password_backup)
        {
            // var params = {
            //     email:userCredentials.email,
            //     password:userCredentials.password,
            // }
            
            setResponse(null)
            setError(null)
            setLoading(null)
            // fetchData(params);
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
                    <p className="error-register">{userError.name}</p><br/>
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
                    <p className="error-register">{userError.username}</p><br/>
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
                    <p className="error-register">{userError.email}</p><br/>
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
                    <p className="error-register">{userError.password}</p>
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
                    <p className="error-register">{userError.password_backup}</p>
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