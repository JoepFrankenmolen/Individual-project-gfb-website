import React, {useState} from "react"
import axios from "axios";

const GroupSave = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [nameError, setNameError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    
    const [categoryId,setCategoryId] = useState("-1")
    const [groupDetails,setGroupDetails] = useState({
        name :"",
        
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
        if(groupDetails.name === "")
        {
            setNameError("*enter a name")
        }        
        
        if(categoryId === "-1")
        {
            setCategoryError("*enter a category")
        }//zit nog een bug in idk waar

        if(groupDetails.name !== "" && categoryId !== "-1")
        {
            const params = {
                method: 'post',
                url: '/group/',
                data:{
                    "name":groupDetails.name,
                    "category":categoryId,
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
        setCategoryId(e.target.value)
    }

    const onChange = (e) =>{
        setGroupDetails({
            ...groupDetails,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div className="admin-group-save-container">
            <div className="admin-group-save-box">
                <form onSubmit={save} className="admin-group-save-form">
                    <label for="name" className="admin-group-save-label">name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="admin-group-save-text" 
                        value={groupDetails.name}
                        name="name" 
                        placeholder="Name.."
                        onChange={onChange}
                    />
                    <p className="admin-group-save-error">{nameError}</p><br/>

                    <label for="category" className='admin-group-save-label'>Chose a category:</label>
                    <select name="category" value={categoryId} onChange={handleChange} className='admin-group-save-select'>
                        <option value="-1">select category:</option>
                        <option value="speltak">speltak</option>
                        <option value="contact-group">contact-group</option>
                        <option value="anders">anders</option>
                        {/* hard coded for now */}
                    </select>
                    <p className="admin-group-save-error">{categoryError}</p><br/>

                    <div className="admin-group-save-response" style={error !=null ? errorStyle : null}>
                        {saveResponse()}
                    </div>
                        
                    <div className="submit">
                        <input type="submit"className="admin-group-save-form-submit" value="save"/>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default GroupSave