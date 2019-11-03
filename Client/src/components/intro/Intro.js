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
        <img
          src="cofre gofre.png"
          alt=""
          style={{ width: "100vw", height: "100vh" }}
        />
        <button className="buttonD" onClick={dispHome}>
          Descubre
        </button>
      </div>
      <div className="backscreen"></div>
      <div className="darker "></div>
      <div className="content container">
        <div className="row">
          <div className="col-md-1"></div>
          <h1 className=" welcome text-white">¡BIENVENIDO!</h1>
        </div>
        <div className="row">
          <p className="text-light introduc col-md-6">
            Barrio Abajo es uno de los primeros barrios de Barranquilla y cuenta
            con una gran historia e importancia pora la ciudad y el pais. Asi,
            nuestra plataforma ha sido creada con el fin de redescubrir el
            Barrio Abajo, conocer sobre sus necesidades y aportar para su
            desarrollo; para el desarrollo de nuestro Tesoro Quillero.
          </p>
        </div>
        <button
          className="row butti btn-secondary btn-lg "
          onClick={handleClick}
        >
          Vamos a descubrirlo
        </button>
      </div>
    </div>
  );
}
export default withRouter(Intro);
