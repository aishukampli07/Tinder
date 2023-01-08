import React,{useState, useEffect} from "react";
import './signlog.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login() {
  const [varname,setName]=useState({emailid:'',password:''});
  const navigate = useNavigate();
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
          window.history.pushState(null, document.title, window.location.href);
         });
  }, [])
  const navHome=(e)=>{
    e.preventDefault();
       axios.get('http://localhost:8080/api/user_details',varname)
       .then(res=>{
        if(res.data.find(em=>em.emailid===varname.emailid)===undefined)
        {
          alert("User not found.");
        }
        else if (res.data.find(em=>em.emailid===varname.emailid)!==undefined && res.data.find(em=>em.password===varname.password)===undefined)
        {
          alert("Password is incorrect.");
        }
        else 
        {
          //console.log("Else ",res.data.find(em=>em.emailid===varname.emailid))
          navigate('/home',{state:res.data.find(em=>em.emailid===varname.emailid)})
         
        }
       })
       
     
  }
  
        return (
          <div className="outer">
          <div className="inner">
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              <b>TINDER</b>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                  Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br></br>
        <br></br>
            <form onSubmit={navHome}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label><b>Email</b></label>
                    <input type="email" className="form-control" placeholder="Enter email" value={varname.email}  
                    onChange={(e)=>setName({...varname,emailid:e.target.value})} required/>
                </div>

                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="password" className="form-control" placeholder="Enter password"value={varname.pass} 
                     onChange={(e)=>setName({...varname,password:e.target.value})} required/>
                </div><br />

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                {/* <p className="forgot-password text-right">
                <a href="#"> Forgot password?</a>
                </p> */}
            </form>
            </div></div></div>
        );
    }