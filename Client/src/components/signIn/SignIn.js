import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navigation from '../navigation/Navigation'
import './SignIn.css'
import { useSelector, useDispatch } from "react-redux";
import {closeButton, selectButtonSign} from '../../actions'

function SignIn(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
      console.log("Logged In")
  }
  const handleUserChange = (e) => {
    const currentEmail = e.target.value
    setEmail(currentEmail)
  }

  const handleUserPassword = (e) =>{
    const currentPassword = e.target.value
    setPassword(currentPassword)
  }
  
  const close = () => {
     
    dispatch(closeButton())
  }
  const signU = () => {
      dispatch(selectButtonSign())
  }

  return (
    <body className="bodyb">
    
    <div className="loginBox">
    <h3 onClick={close} className="parax">X</h3>
     <h2>¡Bienvenido!</h2>
     
      <form onSubmit={login}>
        <p >Email</p>
        <input 
        type="text" 
        placeholder="Enter your email" 
        value={email} 
        onChange={handleUserChange}
        />
        <p >Password</p>
        <input 
        type="password" 
        placeholder="*********" 
        value={password} 
        onChange={handleUserPassword}
        />
        <input
        type="submit"
        name = ""
        value="Sign In"
        />
      </form>
     <a className="acomp" onClick={signU}>¿No tienes cuenta aún? Regístrate.</a> 
    </div>
    </body>
   
  );
  
}

export default withRouter(SignIn);