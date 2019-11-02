import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {selectHome } from "../../actions";
import "./Intro.css";

function Intro(props) {
    const dispatch = useDispatch()
    const dispHome = () => {
        dispatch(selectHome());
        setTimeout(()=>{
            setDisplayVisible('none')
        },4000)
      };    
const [displayVisible, setDisplayVisible] = useState('visible');
const displayHome = useSelector(state => state.initHome);
const handleClick = () =>{
    props.history.push("/home")
}
  return (
     <div>
    <div className="divH visible" style={{ opacity: displayHome ? 0 : 1, display: displayVisible  }}>
    <img src="cofre.png" style={{ marginLeft: "25vw" }} />

    <button className="buttonD" onClick={dispHome}>
      Descubre
    </button>
   
  </div>
  <button className="butti" onClick={handleClick}>Mapa</button>
  </div> 
  );
}
export default withRouter(Intro);
