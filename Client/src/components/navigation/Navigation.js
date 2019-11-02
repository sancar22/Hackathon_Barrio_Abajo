import React from "react";
import { withRouter } from "react-router-dom";
import "./Navigation.css";
import { useDispatch } from "react-redux";
import { selectButton } from "../../actions";

function Navigation(props) {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(selectButton());
  };
  return (
    <nav className="navbar navbar-expand-lg pt-0 pb-0 ">
      <h1 className="navbar-brand brand">Nombre de la empresa</h1>
      <button
        className="navbar-toggler2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        {/* align-items-center */}
        <ul className="but navbar-nav mr-5 ml-auto justify-content-end  ">
          <button onClick={click} className="btn btn-primary align-middle">
            Ingresar
          </button>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navigation);
