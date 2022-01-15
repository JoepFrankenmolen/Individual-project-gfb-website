import React from 'react';
import { useHistory } from 'react-router-dom';


const Searchbar = props =>{

  const history = useHistory();
  const {title} = "";
    

  function onKeyUp(event) {

    if (event.charCode === 13) {
      if(window.location.pathname !== "/")
      {
        history.push("");
        props.filter(event.target.value)
      }
    }

  }
 
  


  return(
  <div className="searchbar-div">
      <input
      type="text"
      id="searchbar-id"
      className="searchbar"
      value={title}
      onChange={e => {props.filter(e.target.value)}}
      onKeyPress={onKeyUp}
      placeholder="Search all posts.."
    />
  </div>    
  )
}

export default Searchbar