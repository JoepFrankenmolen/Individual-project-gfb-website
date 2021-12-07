import React from 'react';


const Searchbar = props =>{

    const {title} = "";
    

    return(
    <div className="searchbar-div">
        <input
        type="text"
        className="searchbar"
        value={title}
        onChange={e => {props.filter(e.target.value)}}
        placeholder="Search all posts.."
      />
    </div>    
    )
}

export default Searchbar