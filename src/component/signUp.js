import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";

export default function SignUp(props){
    const navigate =  useNavigate();
    let [UserName, setUserName] = useState("")
    let [Password, setPassword] = useState("")
    let [Email, setEmail] = useState("")
    let [Phone, setPhone] = useState("")

    function send() {

     if(UserName=="" || Password=="" || Email=="" || Phone=="" ) {
        
        alert(" There are empty fields ") 
     
    }else{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
 
    var raw = JSON.stringify({
    "name": UserName,
    "password": Password,
    "email": Email,
    "phone": Phone
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders ,
    body: raw,
    redirect: 'follow'
    };
   
fetch("http://localhost:3050/createUser", requestOptions)
  .then(response => { console.log(response) ;return response.json()})
  .then(result => {
      console.log(result)
    alert(result.message +" Wellcome!! "); 
    props.send({"UserName":UserName,"Token":result.token,"userId":result.userId});
    navigate('/weather');
     })
  .catch(error => {alert('error to send '+ error )});
          
    }
}

    return (
        <>
        <div className="container-fluid"> 
            <h1>SignUp</h1>
            
            <div className="row">
            <label>UserName:<input type="text" name="name" value={UserName} onChange={(e) => { setUserName(e.target.value) }}/></label>
            </div>

            <div className="row">
            <label>Password:<input type="password" name="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} /></label>
            </div>
            <br></br>

            <div className="row">
            <label>Email:<input type="email" name="email" value={Email} onChange={(e) => { setEmail(e.target.value) }}/></label>
            </div>

            <div className="row">
            <label>Phone:<input type="tel" name="phone"  value={Phone} onChange={(e) => { setPhone(e.target.value) }}/></label>
            </div>
           
            <input type="button" value="save" onClick={send} style={{cursor: "pointer"}}/>
           
        </div>
        
        </>
    )
}
