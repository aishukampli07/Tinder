import ChatRoom from './components/ChatRoom.js'
import './App.css'
import ChatList from './components/ChatList'
import Login from './components/login'
import SignUp from './components/signup'
import Home from './components/Home'
import Profile from './components/profile'
import './components/signlog.css'
import './components/deck.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      
          <div>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/chat-list" element={<ChatList/>}/>
        <Route path="/chat" element={<ChatRoom/>}/>
    </Routes>
    </div>
    
    </Router>
  );
}

export default App;
