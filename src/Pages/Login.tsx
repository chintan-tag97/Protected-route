import React from 'react'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  const login =()=> {
    localStorage.setItem('login', "true")
    navigate('/')
  }
  const navigate = useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(login){
      navigate('/')
    }
  });
  return (
    <div>
      <h1>Login page</h1>
      <input type="text"/><br/>
      <input type="text"/><br/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login