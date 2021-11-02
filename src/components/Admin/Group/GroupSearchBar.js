//this will probely be an general thing\
//this wil for example be a general thing

const GroupSearchBar = props =>{

    const {title} = "";

    return(
    <div className="form-container">
        <input
        type="text"
        value={title}
        onChange={e => {props.useFilter(e.target.value)}}
      />
    </div>    
    )
}

export default GroupSearchBar