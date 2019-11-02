import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/Routes";
import { withRouter } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import {selectButton} from '../../actions'

function Navigation(props) {
<<<<<<< HEAD
const dispatch = useDispatch();

 const click = () => {
      dispatch(selectButton())
 }
  return (
    <body className="bodyy">
      <section>
        <header>
          <div className="navBox">
            <ul>
              <a>
                <li>
                  <Link to={ROUTES.HOME}>Home</Link>
                </li>
              </a>
              <a>
                <li>
                  <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                </li>
              </a>
              
            </ul>
         
          <button onClick ={click}>
            Click
          </button>
          </div>
        </header>
      </section>
    </body>
=======
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
          <button className="btn btn-primary align-middle">Ingresar</button>
        </ul>
      </div>
    </nav>
>>>>>>> 5dd129656a78b10d7c2a556203f195d434198ab1
  );
}
export default withRouter(Navigation);
