import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { closeButton, closeButtonSP } from "../../actions";

function SignUp(props) {
  const disp = useSelector(state => state.buttonSignUp);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const register = e => {
    e.preventDefault();
    fetch("http://localhost:4000/api/v1/user/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        last_name: lastName,
        password: password,
        password_confirmation: passwordConf,
        cel: cellphone
      })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
    console.log("register");
    signU();
  };

  const close = () => {
    dispatch(closeButton());
  };
  const signU = () => {
    dispatch(closeButtonSP());
  };

  return (
    <div className={`bodybu ${disp ? "visible" : "hidden"}`}>
      <div className="loginBoxu border border-dark container">
        <div className="row">
          <div className="col-md-12">
            <h4
              style={{ alignItems: "left" }}
              onClick={close}
              className="paraxu float-right"
            >
              X
            </h4>
          </div>
        </div>
        <div className="formu">
          <h2 className="h2u">¡Crea tu cuenta!</h2>

          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Apellido"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Celular"
              value={cellphone}
              onChange={e => setCellphone(e.target.value)}
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirmación contraseña"
              value={passwordConf}
              onChange={e => setPasswordConf(e.target.value)}
            />
            <input
              style={{ marginTop: "10%" }}
              type="submit"
              name=""
              value="Crear mi cuenta"
            />
          </form>
          <div className="acompo" onClick={signU}>
            Ya tengo cuenta. Ingresar.
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
