import './../../css/navbar.css'


const Searchbar = props =>{

    const {title} = "";

    return(
    <div className="searchBarDiv">
        <input
        className="searchBar"
        type="text"
        value={title}
        onChange={e => {props.filter(e.target.value)}}
        placeholder="Search.."
      />
    </div>    
    )
}

export default Searchbar