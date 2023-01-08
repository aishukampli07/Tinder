import React from 'react'
import './style.css'
import {  BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

const Test = (props) => {
const location = useLocation();
const [chatData, setChatData] = useState([]);
const [message, setMessage] = useState("");

useEffect(() => {
    axios.get('http://localhost:8080/api/chats')
    .then(res=>{setChatData(res.data)});
}, [chatData])

const getChats = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/chats',{senderName:location.state.userName,recipientName:location.state.chatter,message:message})
    .then(res=>{console.log("sent successfully",res)})
    
}
const chatlogout = () => {
    // navigate('/sign-in')
    
}
const textHandler = (e) => {
    setMessage(e.target.value);
}

    return (
        <div className="chat">
            {chatData.map(function(a){
                if(a.senderName===location.state.userName && a.recipientName===location.state.chatter){
                    return (<div className="post_div" style={{ marginLeft:"35rem", backgroundColor: '#82CD47' }}><h5 style={{ color: 'white' }}>{a.senderName} <p/> {a.message}</h5></div>)
                }
                else if(a.recipientName===location.state.userName && a.senderName===location.state.chatter){
                    return (<div className="post_div"><h5 style={{ color: 'white' }}>{} <p/>{a.senderName} <p/> {a.message}</h5></div>)
                }
       })}
       <div className="send_and_input">
       <input id="input" className="chat_input" onChange={textHandler} placeholder="type msg.." type="text"></input>
        <button onClick={getChats} className="chat_send">Send</button>
        <Link to={'/sign-in'}>
            <button  className="chat_logout">Logout</button>
        </Link>
        
        </div>
        </div>
    )
}

export default Test
