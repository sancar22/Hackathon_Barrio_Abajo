import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";

function Navigation(props) {
  const controller = useSelector(state => state.initHome);
  return (
    <nav
      style={{ opacity: controller ? 0.3 : 1 }}
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
    >
      <Link className="navbar-brand" to="/">
        TesoroQuillero
      </Link>
      <button
        className="navbar-toggler initBtn"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link initBtn text-center" to="/projects">
              Iniciativas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default withRouter(Navigation);
