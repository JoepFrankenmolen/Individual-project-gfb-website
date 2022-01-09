import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

  
const UserItem = props => {

    const history = useHistory();
    const [editing, setEditing] = useState(false)
    const [willDelete, setDelete] = useState(0)
    const [vars, setVars] = useState(props.user)

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    let viewMode = {}
    let editMode = {}

    const details = () =>{
        history.push("/admin/users/"+props.user.userId); 
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

    const clickDelete = () =>{
        setDelete(willDelete+ 1)
        if(willDelete === 1)
        {
            deleteUser()
        }
    }

    const deleteText = () =>{
        
        if(willDelete === 1)
        {
            return(
                <a>are you sure you want to delete</a>
            )
        }
        else{
            return(
                <a>delete</a>
            )
        }
    }

    async function deleteUser(){
        const params = {
            method: 'delete',
            url: '/user/'+vars.userId,
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
            vars.name = "(DELETED)"
            vars.username = "(DELETED)"
            vars.email = "(DELETED)"
            vars.phonenumber = "(DELETED)"
            vars.role = "DELETED"
            vars.active = false
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    async function handleUpdatedDone(){
        const params = {
            method: 'put',
            url: '/user/',
            data:{
                id:vars.userId,
                name:vars.name,
                username:vars.username,
                phonenumber:vars.phonenumber,
                role:vars.role,
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
        <div className='admin-user-list-item'>
            <div className='admin-user-list-item-container'>
                <div className='admin-user-list-item-image'>
                    <a>img</a>
                </div>
                <div className='admin-user-list-item-content' style={viewMode}>
                    <a>name:{vars.name}</a>
                    <a>username:{vars.username}</a>
                    <a>email:{vars.email}</a>
                    <a>phonenumber:{vars.phonenumber}</a>
                    <a>role:{vars.role}</a>
                    <a>active:{vars.active.toString()}</a>
                </div>
                <div className='admin-user-list-item-content-edit' style={editMode}>
                    <a>name:</a>
                    <input
                        type="text"
                        className="admin-user-list-item-content-text"
                        name="name"
                        value={vars.name}
                        onChange={onChange}
                    />
                    <a>username:</a>
                    <input
                        type="text"
                        className="admin-user-list-item-content-text"
                        name="username"
                        value={vars.username}
                        onChange={onChange}
                    />
                    <a>phonenumber:</a>
                    <input
                        type="text"
                        className="admin-user-list-item-content-text"
                        name="phonenumber"
                        value={vars.phonenumber}
                        onChange={onChange}
                    />
                    <a>role: (no dropdown box yet and needs to be in caps)</a>
                    <input
                        type="text"
                        className="admin-user-list-item-content-text"
                        name="role"
                        value={vars.role}
                        onChange={onChange}
                    />
                </div>
                <div className='admin-user-list-item-delete'onClick={clickDelete}>
                    {deleteText()}
                </div>
                <div className='admin-user-list-item-details'onClick={details}>
                    <a>details</a>
                </div>
                <div className='admin-user-list-item-edit'onClick={handleEditing}>
                    {editOrSave()}
                </div>
            </div>
        </div>    
    )
}


export default UserItem;