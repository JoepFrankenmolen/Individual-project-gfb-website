import React from 'react';


  
const GroupItem = props => {
    return(
        <div className='item' >
            <b>{props.group.name}</b><br />
            <a>category: {props.group.category}</a><br />
            <a>is active: {props.group.active.toString()}</a>
        </div>        
    )
}


export default GroupItem;