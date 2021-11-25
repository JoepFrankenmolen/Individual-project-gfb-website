//this will probely be an general thing\
//this wil for example be a general thing

const GroupSearchBar = props =>{

    const {title} = "";

    return(
    <div className="search_container">
        <input
        type="text"
        value={title}
        placeholder="temp group searchbar.."
        onChange={e => {props.useFilter(e.target.value)}}
      />
    </div>    
    )
}

export default GroupSearchBar