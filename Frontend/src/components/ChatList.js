import {React, useState, useEffect} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom'

const ChatList = () => {
    const [chatList, setChatList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        axios.get(`http://localhost:8080/api/swipe_details`)
              .then(res=>{
                let x = Array.from(new Set(res.data.filter(a=>a.sender_emailid===location.state.userName).map(b=>b.receiver_emailid)));
                let z = Array.from(new Set(res.data.filter(a=>a.receiver_emailid===location.state.userName&&x.includes(a.sender_emailid)).map(b=>b.sender_emailid)));
                setChatList(z);
        });
    }, [])

    return (
        <div>
            {chatList.map(function(a){return(<Link to="/chat" state={{userName:location.state.userName, chatter:a}}><Button variant="primary">{a}</Button><br /><br /></Link>)})}
        </div>
    )
}

export default ChatList
