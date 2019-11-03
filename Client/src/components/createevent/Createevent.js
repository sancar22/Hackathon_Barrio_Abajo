import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  correctButton,
  deCorrectButton,
  closeButton,
  closeButtonSP,
  openEventsCreator
} from "../../actions/index";
import "./Comments.css";

function Createevent(props) {
  return (
    <div className="eventContainer">
      <div className="loginBox">
        <div className="row">
          <div className="col-md-12">
            <h3 onClick="" className="parax float-right">
              X
            </h3>
          </div>
        </div>
        <h2>¡Muestrale al mundo tus iniciativas!</h2>
        <div className="formul">
          <form onSubmit="">
            <p>Titulo</p>
            <input type="text" placeholder="Titulo" value="" onChange="" />
            <p>Descripción</p>
            <div style={{ display: "inline" }}>
              <input type="textarea" placeholder="" value="" onChange="" />
              <input type="radio" name="gender" value="social" />
            </div>
            Social
            <br />
            <input type="radio" name="gender" value="cultural" />
            Cultural
            <input type="radio" name="gender" value="aseo" />
            Aseo
            <input type="radio" name="gender" value="deportivo" />
            Deportivo
            <input
              type="submit"
              style={{ margginTop: "8vh" }}
              name=""
              value="Sign In"
            />
          </form>
          <a className="acomp" onClick="">
            ¿No tienes cuenta aún? Regístrate.
          </a>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Createevent);
