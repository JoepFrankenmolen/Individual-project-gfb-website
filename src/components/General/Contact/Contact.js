import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./contact.css";
// import "./../../../css/General/home.css"
import useAxios from './../UseAxios';
import {FaGreaterThan} from "react-icons/fa"
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;


const Contact = () => 
{
  const [stompClient, setStompClient] = useState(null);
  const [startChatId, setStartChatId]=useState("-1"); 
  const [messageText,setMessageText] = useState("");
  const [messages, setRecievedMessages] = useState([]);

  //creating the chat
  const [createChatResponse, setCreateChatResponse] = useState(null);
  const [createChatError, setCreateChatError] = useState(null);
  const [createChatLoading, setCreateChatLoading] = useState(false);

  //the groups the user can chose from to start
  const { response, error, loading } = useAxios({
      method: 'get',
      url: '/conversation',
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    });

  //the groups the user can chose from to look at the chat
  const [groupResponse, setResponse] = useState(null);
  const [groupError, setError] = useState(null);
  const [groupLoading, setLoading] = useState(false);

  //the messages
  const [messageResponse, setMessageResponse] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [messageLoading, setMessageLoading] = useState(false);

  const fetchData = async (params) => {
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
  };

  useEffect(() => {
    fetchData({
      method: 'get',
      url: '/conversation/'+ sessionStorage.getItem("userId"),
      headers: {
        Authorization: sessionStorage.getItem("token"),
      },
    });
  }, []);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function countdown(){
      await sleep(500);
      window.location.reload(false);
  }
  
  async function addChat(event){
    event.preventDefault();
    if(startChatId !== "-1")
    {
      const params = {
        method: 'post',
        url: '/conversation',
        headers: {
        Authorization: sessionStorage.getItem("token"),
        },
        data: {
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
    }

    if(createChatError != null)
    {
        console.log(error)
      return(
        <div className="add-chat-response">
            <a>failed to add chat</a>
        </div>
      )
    }
    else if(createChatLoading)
    {
      return(
        <div className="add-chat-response">
            <a>prossesing chat</a>
        </div>
      )
    }
    else if(createChatResponse !== null)
    { 
      countdown()
      return(
        <div className="add-chat-response">
            <a>chat added</a>
        </div>
      )
    }
  }

  const handleGroupChange = (e) =>{
    setStartChatId(e.target.value)
  }

  async function loadChatById(id){
    const params = {
      method: 'get',
      url: '/conversation/messages/'+id,
      headers: {
      Authorization: sessionStorage.getItem("token"),
      },
    }
    setMessageLoading(true);
    try {
      const res = await axios.request(params);
      setMessageResponse(res.data);
      setMessageError(null);
    } catch (err) {
      setMessageError(err);
    } finally {
      setMessageLoading(false);
    }
  }

  const startChatContainer = () =>{

    if(response === null && error === null && loading ===false)
    {
    }

    if(error != null)
    {
        console.log(error)
      return(
        <div className="post-center">
            <a>Error loading chat options</a>
        </div>
      )
    }
    else if(loading)
    {
      return(
        <div className="post-center">
            <a>Loading chat options</a>
        </div>
      )
    }
    else if(response !== null)
    {
      return(
        <div className="chose-chat-box center">
            <form onSubmit={addChat} className='chat-chose-form'>
              <label for="groups">Chose a group to chat with:</label>
              <select name="groups" value={startChatId} onChange={handleGroupChange} className='group-select'>
                <option value="-1">select group:</option>
                {response.map((group) =>(
                  <option value={group.id}>{group.name}</option>                 
                ))}
              </select>
            <input type="submit" value="start"/>
            {addChatResponse()}
          </form>
        </div>
      )
    }
  }

  const choseChatContainer = () =>{
    if(groupResponse === null && groupError === null && groupLoading ===false)
    {
    }

    if(groupError != null)
    {
      return(
        <div className="post-center">
            <a>Error loading chat's</a>
        </div>
      )
    }
    else if(groupLoading)
    {
      return(
        <div className="post-center">
            <a>Loading chat's</a>
        </div>
      )
    }
    else if(groupResponse !== null)
    {
      if(groupResponse.length === 0)
      {//must be done better lol but good enough for now
        return(
          <div className="current-chats-box">
              <div className='chat-group-box'>
                <h1>chats:</h1>
                <a>no chats found</a>
              </div>
          </div>
        )
      }
      else{
        return(
          <div className="current-chats-box">
              <div className='chat-group-box'>
                <h1>chats:</h1>
                {groupResponse.map((chats)=>(
                  <div className='chat-group' onClick={() => loadChatById(chats.conversationId)}>
                    <a>{chats.groupName}</a>
                  <div class="greater-than-icon">
                    <FaGreaterThan />
                  </div>
                </div>
                ))}
              </div>
          </div>
        )
      }
    }
  }

// send the data using Stomp
function sendMessage(e) {
  e.preventDefault()
   if(/*user != null && */messageText != "" && messageResponse != null)
  {
    console.log(messageText)
    stompClient.send("/app/create",{},JSON.stringify({
      'conversationId':messageResponse.conversationId,
      'userId': sessionStorage.getItem("userId"),
      'message': messageText
    }))//"/app/hello", {}, JSON.stringify({'name': msgToSend}));
  
  }
}

const loadMessages = () =>{
  return(
    messages.map((message)=>(
      <div className='message-box'>
        <b>{message.userName}: </b>
        <a>{message.message}</a>
      </div>
      ))
  )
}

const onChange = e => {
  setMessageText(e.target.value)
}
  const onMessageReceived = (data) =>{
    console.log(data.body)
    setRecievedMessages(messages => [...messages, JSON.parse(data.body)])
  }

  const messageContainer = () =>{
    if(messageResponse === null && messageError === null && messageLoading ===false)
    {
      return(
        <div className="message-container">
          <div className='messages'>
            <div className='message-title center'>
              <h1>select a chat</h1>
            </div>
          </div>
      </div>
      )
    }

    if(messageError != null)
    {
      return(
        <div className="message-container">
          <div className='messages'>
            <div className='message-title center'>
              <h1>error fetching chat</h1>
            </div>
          </div>
      </div>
      )
    }
    else if(messageLoading)
    {
      return(
        <div className="message-container">
          <div className='messages'>
            <div className='message-title center'>
              <h1>fetching the chat</h1>
            </div>
          </div>
      </div>
      )
    }
    else if(messageResponse !== null)
    { 
      if(stompClient == null)
      {
        setRecievedMessages(messageResponse.messages)
        // use SockJS as the websocket client
        const socket = SockJS(process.env.REACT_APP_DOMAIN+"/ws");
        // Set stomp to use websockets
        const stompClient = Stomp.over(socket);
        // connect to the backend
        stompClient.connect({}, () => {
          // subscribe to the backend
          stompClient.subscribe('/topic/message/' + messageResponse.conversationId, (data) => {
            //console.log(data);
            onMessageReceived(data);
          });
        });
        // maintain the client for sending and receiving
        setStompClient(stompClient);
      }

      return(
        <div className="message-container">
          <div className='messages'>
            <div className='message-title'>
              <h1>current chat with: </h1>
            </div>
            {loadMessages()}
          </div>
          <form onSubmit={sendMessage} className="message-form">
            <input 
                type="text" 
                className="message-text" 
                value={messageText}
                name="message" 
                placeholder="message.."
                onChange={onChange}
            />         
            <div className="message-submit-div">
                <input type="submit"className="message-submit" value="Send message"/>
            </div>
          </form> 
        </div>
      )
    }
  }

  return (
  <div className="contact">
    <div className="contact-messaging">
      <div className="start-chat center">
        {startChatContainer()}
      </div>
      <div class="vl"></div>
      <div className="chat-options center">
        {choseChatContainer()}
      </div>
      <div class="vl"></div>
      <div className="chat center">
        {messageContainer()}
      </div>
    </div>
  </div>
  )
}

export default Contact;