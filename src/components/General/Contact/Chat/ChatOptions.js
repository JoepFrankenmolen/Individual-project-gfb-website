import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAxios from './../../UseAxios';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;


const ChatOptions = () => 
{
    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/conversation',
        headers: {
        Authorization: sessionStorage.getItem("token"),
        },
    });

    const [startChatId, setStartChatId]=useState("-1"); 

    //creating the chat
    const [createChatResponse, setCreateChatResponse] = useState(null);
    const [createChatError, setCreateChatError] = useState(null);
    const [createChatLoading, setCreateChatLoading] = useState(false);

  
    async function addChat(event){
        event.preventDefault();

        if(startChatId !== "-1")
        {
            const params = {
                method: 'post',
                url: '/conversation',
                headers: 
                {
                    Authorization: sessionStorage.getItem("token"),
                },
                data: 
                {
                    userId: sessionStorage.getItem("userId"),
                    groupId: startChatId,
                },
            }
            
            setCreateChatLoading(true);
            try {
                const res = await axios.request(params);
                setCreateChatResponse(res.data);
                setCreateChatError(null);
            } catch (err) {
                setCreateChatError(err);
            } finally {
                setCreateChatLoading(false);
            }
        }
    }

    const addChatResponse = () =>{
        if(createChatResponse === null && createChatError === null && createChatLoading ===false)
        {
            return(
                <div className="options-form-response">
                    <a> </a>
                </div>
            )
        }

        if(createChatError != null)
        {
            return(
                <div className="options-form-response">
                    <a>failed to add chat</a>
                </div>
            )
        }
        else if(createChatLoading)
        {
            return(
                <div className="options-form-response">
                    <a>prossesing chat</a>
                </div>
            )
        }
        else if(createChatResponse !== null)
        { 
            resetWindow()
            return(
                <div className="options-form-response">
                    <a>chat added</a>
                </div>
            )
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function resetWindow(){
        await sleep(500);
        window.location.reload(false);
    }

    const handleGroupChange = (e) =>{
        setStartChatId(e.target.value)
    }



    if(response === null && error === null && loading ===false)
    {
        return(
            <div className="center">
                <a>Error loading chat options</a>
            </div>
        )
    }

    if(error != null)
    {
        return(
            <div className="center">
                <a>Error loading chat options</a>
            </div>
        )
    }
    else if(loading)
    {
        return(
            <div className="center">
                <a>Loading chat options</a>
            </div>
        )
    }
    else if(response !== null)
    {
        return(
            <div className="options-box center">
                <form onSubmit={addChat} className='options-form'>
                    <label for="groups" className='options-form-label'>Chose a group to chat with:</label>
                    <select name="groups" value={startChatId} onChange={handleGroupChange} className='options-from-select'>
                        <option value="-1">select group:</option>
                        {response.map((group) =>(
                        <option value={group.id}>{group.name}</option>                 
                        ))}
                    </select>
                    <input type="submit" className='options-from-submit' value="start"/>
                    {addChatResponse()}
                </form>
            </div>
        )
    }
}

export default ChatOptions;