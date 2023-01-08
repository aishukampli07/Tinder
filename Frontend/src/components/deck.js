import React ,{useState}from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { People } from "./People";
import "./deck.css";
import axios from "axios";
// let people=[]
const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 19rem;
  width: 300px;
  height: 300px;
  background-size: cover;
`;

const TinderCards =(props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [count,setCount] = useState(0);
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  props.people.map((person, index)=>{
    console.log(!props.matched.includes(person.emailid))
  })
  return (
    <CardDiv>
    
      {props.people.map((person, index) => {
          if(props.p1.premium==1){
          if(props.p1.pref_gender==person.gender && !props.matched.includes(person.emailid)){
              
        return (

          <TinderCard
            key={index}
            className="swipe"
            onSwipe={(direction)=>{
              if(direction=='right' && count<2){
               { console.log(person.emailid)}
                setCount(count+1);
                // console.log(count);
               console.log(typeof(person.swipes),"Insode something")
                axios.post(`http://localhost:8080/api/swipe_details`,{
                sender_emailid:props.p1.emailid,receiver_emailid:person.emailid
              })
              .then(res=>{console.log(res)
                
                });
                
                
                

            }
          else if(count>=2){
            alert("Maximum swipes reached")
            navigate('/sign-in')
          }}}
            onCardLeftScreen={(myIdentifier) => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <ImgDiv
              style={{ backgroundImage: `url(${People[0].image})` }}
              bg={person.image}
            >
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "60px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              > 
                Name:{person.name}
               
              </h1>
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "40px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              > 
                
               Age: {person.age}
               
              </h1>
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "20px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              > 
                
                
               Occupation: {person.occupation}
              </h1> 
              <h1
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "0px",
                  left: "5px",
                  fontSize: "18px",
                  fontWeight: "bold"
                }}
              > 
                
                
                Interests:{person.interests}
              </h1>     
            </ImgDiv>
          </TinderCard>
        );
 }}
 else{
  if(props.p1.pref_gender==person.gender && !props.matched.includes(person.emailid)){
    console.log(person.name)
return (

  <TinderCard
    key={index}
    className="swipe"
    onSwipe={(direction)=>{
      if(direction=='right' && count<1){
        console.log(person.name)
        setCount(count+1 );
        // console.log(count);
       console.log(typeof(person.swipes))
        axios.post(`http://localhost:8080/api/swipe_details`,{
        sender_emailid:props.p1.emailid,receiver_emailid:person.emailid
      })
      .then(res=>{console.log(res)
        
        });
        
    }
  else if(count>=1){
    alert("Maxium swipes Reached")
    navigate('/sign-in')
    
  }}}
    onCardLeftScreen={(myIdentifier) => onCardLeftScreen(person.name)}
    preventSwipe={["up", "down"]}
  >
    <ImgDiv
      style={{ backgroundImage: `url(${People[0].image})` }}
      bg={person.image}
    >
      <h1
        style={{
          color: "white",
          position: "absolute",
          bottom: "60px",
          left: "5px",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      > 
        Name:{person.name}
       
      </h1>
      <h1
        style={{
          color: "white",
          position: "absolute",
          bottom: "40px",
          left: "5px",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      > 
        
       Age: {person.age}
       
      </h1>
      <h1
        style={{
          color: "white",
          position: "absolute",
          bottom: "20px",
          left: "5px",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      > 
        
        
       Occupation: {person.occupation}
      </h1> 
      <h1
        style={{
          color: "white",
          position: "absolute",
          bottom: "0px",
          left: "5px",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      > 
        
        
        Interests:{person.interests}
      </h1>     
    </ImgDiv>
  </TinderCard>
);
}
 }
 
   }
 )}
    </CardDiv>
  );
};

export default TinderCards;