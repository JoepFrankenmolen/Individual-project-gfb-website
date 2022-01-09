import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

  
const GroupItem = props => {

    const history = useHistory();
    const [editing, setEditing] = useState(false)
    const [vars, setVars] = useState(props.group)

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    let viewMode = {}
    let editMode = {}

    const details = () =>{
        history.push("/admin/groups/"+props.group.id); 
    }

    const handleEditing = () => {
        if(editing === false)
        {
            setEditing(true)
        }
        else{
            setEditing(false)
            handleUpdatedDone()
        }
    }

    //cancel button in progress
    const save = () =>{
        handleUpdatedDone()
        setEditing(false)
    }
    
    const editOrSave = () => {
        if(editing === false)
        {
            return(
                <a>edit</a>
            )
        }
        else{
            return(
                <a>save</a>
            )
        }
    }

    async function handleUpdatedDone(){
        const params = {
            method: 'put',
            url: '/group/',
            data:{
                id:vars.id,
                name:vars.name,
                category:vars.category,
                pictureId:-1,
                rank:-1
            },
            headers: 
            {
                Authorization: sessionStorage.getItem("token"),
            },
        }
        
        setLoading(true);
        try {
            const res = await axios.request(params);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    const onChange = e => {
        setVars({
            ...vars,
            [e.target.name]: e.target.value,
        })
    }

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return(
        <div className='admin-group-list-item'>
            <div className='admin-group-list-item-container'>
                <div className='admin-group-list-item-image'>
                    <a>img</a>
                </div>
                <div className='admin-group-list-item-content' style={viewMode}>
                    <a>name:{vars.name}</a>
                    <a>category:{vars.category}</a>
                    <a>active:{vars.active.toString()}</a>
                </div>
                <div className='admin-group-list-item-content-edit' style={editMode}>
                    <a>name:</a>
                    <input
                        type="text"
                        style={editMode}
                        className=""
                        name="name"
                        value={vars.name}
                        onChange={onChange}
                    />
                    <a>category: (no dropdown box yet)</a>
                    <input
                        type="text"
                        style={editMode}
                        className=""
                        name="category"
                        value={vars.category}
                        onChange={onChange}
                    />
                </div>
                <div className='admin-group-list-item-details'onClick={details}>
                    <a>details</a>
                </div>
                <div className='admin-group-list-item-edit'onClick={handleEditing}>
                    {editOrSave()}
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