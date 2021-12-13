import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import useAxios from './../../UseAxios';



const ChatMessages = (props) =>{

    const [stompClient, setStompClient] = useState(null);
    const [messageText,setMessageText] = useState("");
    const [once,setOnce] = useState(false);

    //recieved
    const [messages, setRecievedMessages] = useState([]);
    //the chat is loaded

    const { response, error, loading } = useAxios({
        method: 'get',
        url: '/conversation/messages/'+props.conversationId,
        headers: {
        Authorization: sessionStorage.getItem("token"),
        },
    });
  
    useEffect(() => {
        // use SockJS as the websocket client
        const socket = SockJS(process.env.REACT_APP_DOMAIN+"/ws");
        // Set stomp to use websockets
        const stompClient = Stomp.over(socket);
        // connect to the backend
        stompClient.connect({}, () => {
            // subscribe to the backend
            stompClient.subscribe('/topic/message/' + props.conversationId, (data) => {
            //console.log(data);
            onMessageReceived(data);
            });
        });
        // maintain the client for sending and receiving
        setStompClient(stompClient);
    }, []);

    // send the data using Stomp
    function sendMessage(e) {
        e.preventDefault()
        if(/*user != null && */messageText !== "" && response !== null)
        {
            setMessageText("")
            stompClient.send("/app/create",{},JSON.stringify({
            'conversationId':props.conversationId,
            'userId': sessionStorage.getItem("userId"),
            'message': messageText
            }))
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
        setRecievedMessages(messages => [JSON.parse(data.body), ...messages])
    }

  //TODO, add a solution for disconnection
    if(response === null && error === null && loading ===false)
    {
        return(
        <div className="messages-box">
            <div className='messages-title-response center'>
                <h1>select a chat</h1>
            </div>
        </div>
        )
    }

    if(error != null)
    {
        return(
        <div className="messages-box">
            <div className='messages-title-response center'>
                <h1>error fetching chat</h1>
            </div>
        </div>
        )
    }
    else if(loading)
    {
        return(
        <div className="messages-box">
            <div className='messages-title-response center'>
                <h1>fetching the chat</h1>
            </div>
        </div>
        )
    }
    else if(response !== null)
    { 
        if(once === false)
        {
            setOnce(true)
            setRecievedMessages(response.messages)
        }
        return(
        <div className="messages-box">
            <div className='messages-box-flex'>
                <div className="messages-up">     {/*fix this shit the message is in the scroll box */}           
                    <div className='messages-title'>
                        <h1>messages:</h1>
                    </div>
                    <div className="messages-messages">
                        {loadMessages()}
                    </div>
                </div>
                <div className='messages-down'>
                    <form onSubmit={sendMessage} className="messages-form" autocomplete="off">
                        <input 
                            type="text" 
                            className="messages-form-text" 
                            value={messageText}
                            name="message" 
                            placeholder="message.."
                            onChange={onChange}
                        />         
                        <div className="messages-form-submit-box">
                            <input type="submit"className="messages-form-submit" value="Send message"/>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        )
    }
}

export default ChatMessages;