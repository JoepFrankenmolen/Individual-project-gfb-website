import './../../css/login.css'
import logo from "./../../logo.png"


const Login = () =>{

    const {title} = "";

    const action = (event) =>{
        event.preventDefault();
    }
    //need to add an action

    //everything must be a bit bigger than what it is now

    return(
        <div className="login_main_div">
            <div className="login_div">
                <div className="login_top">
                    <img src={logo} alt="logo" class="logo"/>
                </div>
                <div className="login_info">
                    <a>log in using your email and password</a>
                </div>
                <form onSubmit={action} className="login_form">
                    <label for="email" className="login_label">Email:</label><br/>
                    <input type="text" id="email" className="login_text" name="fname" placeholder="email.."/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" id="password" className="login_text" name="lname" placeholder="password.."/><br/><br/>
                    <input type="submit" className="login_submit" value="Login"/>
                </form> 
            </div>  
        </div>
    )
}

export default Login