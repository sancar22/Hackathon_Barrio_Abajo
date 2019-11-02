import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navigation from '../navigation/Navigation'
import SignIn from '../signIn/SignIn'
import { useSelector, useDispatch } from "react-redux";
import {closeButton} from '../../actions'
import SignUp from '../signUp/SignUp'


function HomePage(props) {
  const dispatch = useDispatch();
  const buttonSignIn = useSelector(state => state.buttonSignIn)
  const buttonSignUp = useSelector(state => state.buttonSignUp)
  
  useEffect(()=> {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
         dispatch(closeButton())
      }
  };
  
  },[])


  return (
   <div>

     {buttonSignIn ? 
     <div>
       <div style={{opacity:0.5}}>
     <Navigation/> 
      </div>
     {buttonSignUp ? <SignUp/> : <SignIn/>}
     </div>
     :
     
     <Navigation/>
     }
    
   
   </div> 
  );
  
}

export default withRouter(HomePage);
