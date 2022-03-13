import React , { useState } from 'react'
import {  useNavigate } from "react-router-dom";


export default function Login(props){
    const navigate =  useNavigate();
    let [UserName, setUserName] = useState("")
    let [Password, setPassword] = useState("")
    
    function SignUp(){
        navigate('/signUp')
    }

    function beforeLogin(){
        if(UserName=="" || Password=="") {
            alert(" There are empty fields ") 
        }else{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3050/loginUser/"+UserName+"/"+Password, requestOptions)
            .then(response => response.json())
            .then(result => {if(result.newtoken){
            
                console.log(result.newtoken+" "+result.userId)
                props.send({"UserName":UserName,"Token":result.newtoken,"userId":result.userId}); 
                navigate('/weather');  
            }else{
                    alert(result); 
                    navigate('/');} } )
            .catch(error => alert('error to send '+ error.message ));
            }
        }
    return (
        <>
        <div className="container-fluid"> 
            <h1>Login</h1>
            
            <div className="row">
            <label>UserName:<input type="text" name="name" value={UserName} onChange={(e) => { setUserName(e.target.value) }}/></label>
            </div>

            <div className="row">
            <label>Password:<input type="password" name="password" value={Password} onChange={(e) => { setPassword(e.target.value) }}/></label>
            </div>
            <br></br>
            
            <input type="button" value="Log in" onClick={beforeLogin} style={{cursor: "pointer"}}/> 
            <input type="button" value="Sign up" onClick={SignUp} style={{cursor: "pointer"}}/>
            {/* <a href="#/signUp" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Sign up</a> */}
        </div>
        </>
    )

}
