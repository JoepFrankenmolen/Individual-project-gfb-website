import React, { useState} from 'react';
import './../../../css/login.css'


const Login = props => 
{
    const [userCredentials,setCredentials] = useState({
        email :"",
        password : ""
    });

    const Login = (event) =>{
        event.preventDefault();
        console.log(userCredentials.email + userCredentials.password)
    }

    const Register = (event) =>{
        event.preventDefault();
        console.log(userCredentials.email + userCredentials.password)
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
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="top">
            <h1 className="Login-h1">Log in</h1>
            <a className="Login-information">Log in using your email or register by hitting the register button</a><br/>
        </div>
        <div className="forms">
            <form onSubmit={Login} className="login-form">
                    <label for="email" className="login-label">E-mail address:</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="login-text" 
                        value={userCredentials.email}
                        name="email" 
                        placeholder="E-mail.."
                        onChange={onChange}
                    />
                    <label for="password" className="login-label">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="login-text" 
                        value={userCredentials.password}
                        name="password" 
                        placeholder="Password.."
                        onChange={onChange}
                    /><br/>
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