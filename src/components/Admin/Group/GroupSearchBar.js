//this will probely be an general thing\
//this wil for example be a general thing

const GroupSearchBar = () =>{
    const [inputText, setInputText] = useState({
        title: "",
    })

    const onChange = e => {
        setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
        })
    }

    return(
    <div className="form-container">
        <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={inputText.title}
            name="title"
            onChange={onChange}
        />
    </div>    
    )
}

export default GroupSearchBar