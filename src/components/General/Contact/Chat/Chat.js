import React, { useState, useEffect } from 'react';
import "./chat.css";
import useAxios from './../../UseAxios';
import {FaGreaterThan} from "react-icons/fa";
import ChatMessages from "./ChatMessages";
import ChatOptions from "./ChatOptions";
import { Redirect } from 'react-router-dom';



const Chat = () => 
{
    const [currentChatId, setCurrentChatId]=useState("-1"); 
    const [oldChatId, setOldChatId]=useState("-1"); 

    //the groups the user can chose from to start
    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/conversation/'+ sessionStorage.getItem("userId"),
        headers: 
        {
            Authorization: sessionStorage.getItem("token"),
        },
    });

    if(sessionStorage.getItem("token") === null)
    {
        return <Redirect to="/" />
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function resetChat(){
        await sleep(500);
        setOldChatId(currentChatId)
    }

    const chatsContainer = () =>{
        if(error != null)
        {
            return(
            <div className="center">
                <a>Error loading chat's</a>
            </div>
            )
        }
        else if(loading)
        {
            return(
            <div className="center">
                <a>Loading chat's</a>
            </div>
            )
        }
        else if(response !== null)
        {
            if(response.length === 0)
            {
                return(
                <div className="chats-box">
                    <div className='chat-group-box'>
                        <h1>chats:</h1>
                        <a>no chats found</a>
                    </div>
                </div>
                )
            }
            else
            {
                return(
                <div className="chats-box">
                    <div className='chats-box-flex'>
                        <div className='chats-title'>
                            <h1>chats:</h1>
                        </div>
                        <div className='chats-chats'>
                            {response.map((chats)=>(
                            <div className='chats-chats-box' onClick={() => setCurrentChatId(chats.conversationId)}>
                                <a className='chats-chats-title'>{chats.groupName}</a>
                                <div class="chats-chats-icon">
                                    <FaGreaterThan />
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                )
            }
        }
    }

    const messageContainer = () =>{
        if(currentChatId === "-1" )
        {
            return(
            <div className="messages-box">
                <div className='messages-title-response'>
                    <h1>select a chat</h1>
                </div>
            </div>
            )
        }
        else if(currentChatId === oldChatId )
        {
            return (
                <ChatMessages
                    conversationId ={currentChatId}
                />
            )
        }
        else if(currentChatId !== oldChatId)
        {
            resetChat()
            return (
            <div className="center">
                <a>Loading chat's</a>
            </div>
            )
        }
    }

    return (
        <div className="contact-chat-container">
            <div className="contact-chat-box">
                <div className="options-container center">
                    {<ChatOptions/>}
                </div>
                <div class="vl"></div>
                <div className="chats-container">
                    {chatsContainer()}
                </div>
                <div class="vl"></div>
                <div className="messages-container center">
                    {messageContainer()}
                </div>
            </div>
        </div>
        )
    }
export default Chat;