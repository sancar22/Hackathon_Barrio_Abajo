import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectHome, deselectHome } from "../../actions";
import "./Intro.css";

function Intro(props) {
  const dispatch = useDispatch();
  const dispHome = () => {
    dispatch(selectHome());
    setTimeout(() => {
      setDisplayVisible("none");
    }, 1000);
  };
  useEffect(() => {
    if (displayVisible === "visible") {
      dispatch(deselectHome());
    }
  }, []);
  const [displayVisible, setDisplayVisible] = useState("visible");
  const displayHome = useSelector(state => state.initHome);
  const handleClick = () => {
    props.history.push("/home");
  };
  return (
    <div>
      <div
        className="divH visible"
        style={{ opacity: displayHome ? 0 : 1, display: displayVisible }}
      >
        <img src="cofre gofre.png" alt="" style={{ width: "100vw", height: "100vh" }}/>
        <button className="buttonD" onClick={dispHome}>
          Descubre
        </button>
      </div>
      <button className="butti" onClick={handleClick}>
        Mapa
      </button>
    </div>
  );
}
export default withRouter(Intro);
