import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeButton, selectHome } from "../../actions";
import "./HomePage.css";
import Maps from "../map/Map";

function HomePage(props) {
  const dispatch = useDispatch();
  const displayHome = useSelector(state => state.initHome);
  const [displayVisible, setDisplayVisible] = useState('visible');

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(closeButton());
      }
    };
  });
  const dispHome = () => {
    dispatch(selectHome());
    setTimeout(()=>{
        setDisplayVisible('none')
    },4000)
  };
  return (
    <div>
      <div className="divH visible" style={{ opacity: displayHome ? 0 : 1, display: displayVisible }}>
        <img src="cofre.png" style={{ marginLeft: "25vw" }} />

        <button className="buttonD" onClick={dispHome}>
          Descubre
        </button>
      </div>
      <Maps/>
    </div>
  );
}

export default withRouter(HomePage);
