import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import Footer from "./footer";
import Header from "./header";
import Deck from './deck'
import styled from "styled-components";
import "./deck.css";
import TinderCards from "./deck";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DivWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  border: 1px solid black;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function Profile() {
    const location = useLocation()
    const navigate = useNavigate();
    const [varname,setVarname] = useState(location.state.varname1)
    const [data,setData] = useState(location.state.data1)

    const [show, setShow] = useState(false);
    const [mshow, setmShow] = useState(false);
    const [pshow, setpShow] = useState(false);
    const [chatList, setChatList] = useState([]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mhandleClose = () => setmShow(false);
    const mhandleShow = () => setmShow(true);
    const phandleClose = () => setpShow(false);
    const phandleShow = () => setpShow(true); 
    const [updatedAt,setUpdatedAt] = useState(1)
    useEffect(() => {
        axios.get(`http://localhost:8080/api/swipe_details`)
              .then(res=>{
                let x = Array.from(new Set(res.data.filter(a=>a.sender_emailid===varname.emailid).map(b=>b.receiver_emailid)));
                let z = Array.from(new Set(res.data.filter(a=>a.receiver_emailid===varname.emailid&&x.includes(a.sender_emailid)).map(b=>b.sender_emailid)));
                setChatList(z);
        });
    }, [])
    console.log(chatList.includes('sita@gmail.com'))
    const pHandler=  (e)=>{
        console.log(varname.premium)
        if(varname.premium==1){
            alert("Account is already premium.")
        }
        else{
            mhandleShow()
        }
       
      
    }
    const premiumHandler=(e)=>{
        console.log(varname);
        axios.put(`http://localhost:8080/api/user_details/${varname.emailid}`,varname)
       .then(res=>{setUpdatedAt(res.data.updatedAt)
       console.log(updatedAt)}
       )
       mhandleClose()
       //navigate('/sign-in')
       
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/log-in'}>
                    <b>TINDER</b>
                    </Link>{varname.premium===1 && <div><i>PREMIUM &nbsp;</i></div>}
                    <Link className="navbar-brand" to={'/chat-list'} state={{userName:varname.emailid}}>
                        
                    <b>CHAT</b>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <input type="image" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" width="30rem" height="30rem" onClick={handleShow}></input>
                                <Offcanvas show={show} onHide={handleClose} placement='end'>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Your Profile</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" height="250rem" width="250rem"></img>
                                        
                                        <br />
                                        <Button variant="primary" >
                                        <h5>Name: {varname.name}</h5>

                                        </Button><br/><br/>
                                        
                                        <Button variant="primary" >
                                            <h5>Email: {varname.emailid}</h5>
                                        </Button><br/><br/>
                                        { (varname.premium!==1) && <Button variant="primary" onClick={pHandler}>
                                            Upgrade to premium 
                                            
                                        </Button> }<br/><br/>
                                        <Modal show={mshow} onHide={mhandleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Upgrade to Premium</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>                                           
                        <input type="radio" value='1' 
                       onChange={(e)=>setVarname({...varname,premium:e.target.value})} /> Confirm upgradation to premium 

                                            </Modal.Body>

                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={mhandleClose}>

                                                            Close

                                                            </Button>

                                                            <Button variant="primary" onClick={premiumHandler}>

                                                            Save Changes

                                                            </Button>

                                                            </Modal.Footer>

                                                            </Modal>

                                        <Button variant="primary">
                                            <Link className="navbar-brand" to={'/'}>
                                            Logout
                                            </Link>

                                        </Button><br/>
                                        
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /><br />
            <br /><br />
            <br /><br />
            
            
   <Deck people={data} p1={varname}matched={chatList}>
              {console.log(data)}
              {console.log(varname)}
            <DivWrapper className="App">
            <Header/>
     <TinderCards people={varname}p1={varname}/>
     <Footer />
     
   </DivWrapper>
            </Deck>
        </div>
    )
}

export default Profile