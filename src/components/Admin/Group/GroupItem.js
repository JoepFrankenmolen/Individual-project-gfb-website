import React from 'react';


  
const GroupItem = props => {

    return(
        <div className='item' onClick={() => props.getGroupDetails(props.group.id)}>
            <div className="groupPictureDiv">
                <img src={props.group.pictureUrl} className="groupPicture" />
            </div>
            <div className="groupItemsDiv">
                <b>{props.group.name}</b><br />
                <a>category: {props.group.category}</a><br />
                <a>is active: {props.group.active.toString()}</a>
            </div>
        </div>        
    )
}


export default GroupItem;