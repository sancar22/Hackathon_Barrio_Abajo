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
import "./Createevent.css";

function Createevent(props) {
  return (
    <div className="eventContainer container">
      <div className="loginBoxe">
        <div className="row">
          <div className="col-md-12">
            <h3 onClick="" className="parax float-right">
              X
            </h3>
          </div>
        </div>
        <h2>¡Muestrale al mundo tus iniciativas!</h2>
        <div className="formul1">
          <form onSubmit="">
            <p className="tis">Titulo</p>
            <input
              type="text"
              className="ins"
              placeholder="Titulo"
              value=""
              onChange=""
            />
            <p className="tis">Descripción</p>
            <div style={{ display: "inline" }}>
              <input
                type="textarea"
                placeholder=""
                className="ins"
                value=""
                onChange=""
              />
            </div>
            <p className="tis">Lugar</p>
            <input
              type="text"
              className="ins"
              placeholder="Lugar"
              value=""
              onChange=""
            />
            <p className="tis">Telefono de contacto</p>
            <input
              type="string"
              className="ins"
              placeholder="Telefono"
              value=""
              onChange=""
            />
            <div className="dropp">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle col-md-12"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Seleccionar ...
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Cultural
                  </a>
                  <a className="dropdown-item" href="#">
                    Deportivo
                  </a>
                  <a className="dropdown-item" href="#">
                    Social
                  </a>
                  <a className="dropdown-item" href="#">
                    Aseo
                  </a>
                </div>
              </div>
            </div>
            <p className="tis">Fecha</p>
            <input type="date" className="ins" style={{ margginTop: "4vh" }} />
            <div className="fin">
              <input type="submit" className="butt btn mt2 col-md-12" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Createevent);
