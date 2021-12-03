import React, { useState} from 'react';
import axios from 'axios';
import './../../../css/General/login.css'

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

const Login = props => 
{
    const [userCredentials,setCredentials] = useState({
        email :"",
        password : ""
    });

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

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
        return(
            loading ? (
                <div>Loading...</div>
              ) : (
                <div >
                    {/*the like for example if you sucseeded it needs to go here */}
                  {error && error.message}
                  {response && response.title}
                </div>
              )
        )
        
    }

    function Login(event){
        event.preventDefault();
        // console.log(userCredentials.email + " "+
        //     userCredentials.password)
        console.log(process.env.REACT_APP_DOMAIN)
        const {params} = {
              method: 'POST',
              url: '/login',
              headers: {
                accept: '*/*',
                },
              data: {
                email:userCredentials.email,
                password:userCredentials.password,
              },
         };

        fetchData(params);
        
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
        <div className="close-icon" onClick={props.handleClose}>x</div>
        <div className="top">
            <h1 className="Login-h1">Log in</h1>
            <a className="Login-information">Log in using your email or register by clicking the register button</a><br/>
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
                    />
                    <div className="axios-response">
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