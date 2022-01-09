import React, {useState} from "react"
import axios from "axios";

const UserSave = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [nameError, setNameError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [roleError, setRoleError] = useState("");
    
    const [role,setrole] = useState("-1")
    const [userDetails,setUserDetails] = useState({
        name :"",
        username:"",
        email:"",
        password:""    
    });

    const errorStyle = {
        color:"red"
    } 

    const saveResponse = () =>{
        if(response !== null)
        {
            return(<a>done</a>)
        }
    }

    async function save(e){
        e.preventDefault();
        if(userDetails.name === "")
        {
            setNameError("*enter a name")
        }
        else
        {
            setNameError("")
        }   
        
        if(userDetails.username === "")
        {
            setUsernameError("*enter a username")
        }
        else
        {
            setUsernameError("")
        }   

        if(userDetails.email === "")
        {
            setEmailError("*enter a email")
        }
        else
        {
            setEmailError("")
        }   

        if(userDetails.password === "")
        {
            setPasswordError("*enter a password")
        }
        else
        {
            setPasswordError("")
        }   
        
        if(role === "-1")
        {
            setRoleError("*select a role")
        }
        else
        {
            setRoleError("")
        }

        if(userDetails.name !== "" && userDetails.username !== "" && userDetails.email !== "" && userDetails.password !== "" && role !== "-1")
        {
            const params = {
                method: 'post',
                url: '/user/',
                data:{
                    "name":userDetails.name,
                    "username":userDetails.username,
                    "email":userDetails.email,
                    "password":userDetails.password,
                    "role":role,

                },
                headers: 
                {
                    "Authorization": sessionStorage.getItem("token"),
                },
            }
            
            setLoading(true);
            try {
                const res = await axios.request(params);
                setResponse(res.data);
                setError(null);
                window.location.reload(false)//in de toekomst moet dit gebeuren zonder een refresh
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
    }


    const handleChange = (e) =>{
        setrole(e.target.value)
    }

    const onChange = (e) =>{
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div className="admin-user-save-container">
            <div className="admin-user-save-box">
                <form onSubmit={save} className="admin-user-save-form">
                    <label for="name" className="admin-user-save-label">name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="admin-user-save-text" 
                        value={userDetails.name}
                        name="name" 
                        placeholder="Name.."
                        onChange={onChange}
                    />
                    <p className="admin-user-save-error">{nameError}</p><br/>
                    <label for="username" className="admin-user-save-label">username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="admin-user-save-text" 
                        value={userDetails.username}
                        name="username" 
                        placeholder="Username.."
                        onChange={onChange}
                    />
                    <p className="admin-user-save-error">{nameError}</p><br/>
                    <label for="email" className="admin-user-save-label">email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="admin-user-save-text" 
                        value={userDetails.email}
                        name="email" 
                        placeholder="E-mail.."
                        onChange={onChange}
                    />
                    <p className="admin-user-save-error">{emailError}</p><br/>
                    <label for="password" className="admin-user-save-label">password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="admin-user-save-text" 
                        value={userDetails.password}
                        name="password" 
                        placeholder="Password.."
                        onChange={onChange}
                    />
                    <p className="admin-user-save-error">{passwordError}</p><br/>

                    <label for="category" className='admin-user-save-label'>Chose a category:</label>
                    <select name="role" value={role} onChange={handleChange} className='admin-user-save-select'>
                        <option value="-1">select role:</option>
                        <option value="ADMIN">admin</option>
                        <option value="USER_ADMIN">user admin</option>
                        <option value="GROUP_ADMIN">group admin</option>
                        <option value="POST_ADMIN">post admin</option>
                        <option value="PICTURE_ADMIN">picture admin</option>
                        <option value="EDITOR">editor</option>
                        <option value="MEMBER">member</option>
                        {/* hard coded for now */}
                    </select>
                    <p className="admin-user-save-error">{roleError}</p><br/>

                    <div className="admin-user-save-response" style={error !=null ? errorStyle : null}>
                        {saveResponse()}
                    </div>
                        
                    <div className="submit">
                        <input type="submit"className="admin-user-save-form-submit" value="save"/>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default UserSave