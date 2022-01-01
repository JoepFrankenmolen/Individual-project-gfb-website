import React from 'react';
import { useHistory } from 'react-router-dom';

  
const GroupItem = props => {

    const history = useHistory();

    const details = () =>{
        history.push("/admin/groups/"+props.group.id); 
    }

    const edit = () =>{

    }

    return(
        <div className='admin-group-list-item'>
            <div className='admin-group-list-item-container'>
                <div className='admin-group-list-item-image'>
                    <a>img</a>
                </div>
                <div className='admin-group-list-item-content'>
                    <a>name:{props.group.name}</a>
                    <a>category:{props.group.category}</a>
                    <a>active:{props.group.active.toString()}</a>
                </div>
                <div className='admin-group-list-item-details'onClick={details}>
                    <a>details</a>
                </div>
                <div className='admin-group-list-item-edit'onClick={edit}>
                    <a>edit</a>
                </div>
            </div>
        </div>
        // <div className='item' onClick={() => props.getGroupDetails(props.group.id)}>
        //     <div className="groupPictureDiv">
        //         <img src={props.group.pictureUrl} className="groupPicture" />
        //     </div>
        //     <div className="groupItemsDiv">
        //         <b>{props.group.name}</b><br />
        //         <a>category: {props.group.category}</a><br />
        //         <a>is active: {props.group.active.toString()}</a>
        //     </div>
        // </div>        
    )
}


export default GroupItem;