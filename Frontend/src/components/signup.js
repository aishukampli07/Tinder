import React ,{useState, useEffect } from "react";
import './signlog.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function SignUp() {
    const [varname,setName]=useState({name:'',emailid:'',gender:'',pref_gender:'',age:'',occupation:'',interests:'',password:''})
    const navigate = useNavigate();
    useEffect(() => {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function(event) {
             window.history.pushState(null, document.title, window.location.href);
           });
    }, [])
     const navHome=(e)=>{
       e.preventDefault();
      // console.log(varname);          
       axios.get('http://localhost:8080/api/user_details',varname)
       .then(res=>{
         if(res.data.find(em=>em.emailid===varname.emailid)!==undefined){
           alert("Email id already exists") 
         }
         else{
          axios.post('http://localhost:8080/api/user_details',varname)
          .then(res=>console.log('posting data',res));
          navigate('/sign-in')
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
        <div>
            <form onSubmit={navHome}>
                <br></br>
                <h3>Register</h3>

                <div className="form-group">
                    <label><b>Full name</b></label>
                    <input type="text" className="form-control" placeholder="Full name" value={varname.name}
                    onChange={(e)=>setName({...varname,name:e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label><b>Email</b></label>
                    <input type="email" className="form-control" placeholder="Enter email"value={varname.emailid} 
                     onChange={(e)=>setName({...varname,emailid:e.target.value})} required/>
                </div>

                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="password" className="form-control" placeholder="Enter password" value={varname.password} 
                    onChange={(e)=>setName({...varname,password:e.target.value})} required/>
                </div>
                <div className="form-group">
                        <label><b>Age</b></label>
                        <input type="number"className="form-control" placeholder="Enter age" value={varname.age}  
                        onChange={(e)=>setName({...varname,age:e.target.value})} required/>
                </div>
                <div className="form-group">
                        <label><b>Gender</b> &nbsp;</label>
                        <input type="radio" value='0' name="gen"
                       onChange={(e)=>setName({...varname,gender:e.target.value})} required/>Male &nbsp;
                        <input type="radio" value='1' name="gen"
                        onChange={(e)=>setName({...varname,gender:e.target.value})} required/>Female &nbsp;
                        <input type="radio"value='2' name="gen"
                       onChange={(e)=>setName({...varname,gender:e.target.value})} required/>Others
                    </div>
                    <div className="form-group">
                        <label><b>Preferred-Gender </b>&nbsp;</label>
                        <input type="radio" value="0" name="gen1"
                       onChange={(e)=>setName({...varname,pref_gender:e.target.value})} required/>Male &nbsp;
                        <input type="radio" value="1" name="gen1"
                       onChange={(e)=>setName({...varname,pref_gender:e.target.value})} required/>Female &nbsp;
                        <input type="radio"value="2" name="gen1"  
                       onChange={(e)=>setName({...varname,pref_gender:e.target.value})} required/>Others
                    </div>
                    
                    <div className="form-group">
                        <label><b>Occupation</b></label>
                        <input type="text"className="form-control"placeholder="Enter occupation" value={varname.occupation }
                       onChange={(e)=>setName({...varname,occupation:e.target.value})} required />
                    </div>
                    <div className="form-group">
                        <label><b>Interests</b></label>
                        <input type="text"className="form-control"placeholder="Enter your interests" value={varname.interests} 
                       onChange={(e)=>setName({...varname,interests:e.target.value})} required/>
                        </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                  Already registered?<a href="/sign-in">Log in.</a>
                </p>
            </form>
            </div>
        </div>
        </div> </div>
           
        );
    }