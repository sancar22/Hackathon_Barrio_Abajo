import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { closeButton, selectButtonSign } from "../../actions";

function SignIn(props) {
  const disp = useSelector(state => state.buttonSignIn);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = e => {
    e.preventDefault();
    fetch("http://localhost:4000/api/v1/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        sessionStorage.setItem("token", data.token);
      });
    close();
  };
  const handleUserChange = e => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
  };

  const handleUserPassword = e => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
  };

  const close = () => {
    dispatch(closeButton());
  };
  const signU = () => {
    dispatch(selectButtonSign());
  };

  return (
    <div className={`bodyb ${disp ? "visible" : "hidden"}`}>
      <div className="loginBox">
        <div className="row">
          <div className="col-md-12">
            <h3 onClick={close} className="parax float-right">
              X
            </h3>
          </div>
        </div>
        <h2>¡Bienvenido!</h2>
        <div className="formul">
          <form onSubmit={login}>
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleUserChange}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={handleUserPassword}
            />
            <input
              type="submit"
              style={{ margginTop: "8vh" }}
              name=""
              value="Sign In"
            />
          </form>
          <a className="acomp" onClick={signU}>
            ¿No tienes cuenta aún? Regístrate.
          </a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
