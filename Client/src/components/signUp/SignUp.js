import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { closeButton, closeButtonSP } from "../../actions";

function SignUp(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const login = () => {
    console.log("Logged In");
  };

  const close = () => {
    dispatch(closeButton());
  };
  const signU = () => {
    dispatch(closeButtonSP());
  };

  return (
    <body className="bodybu">
      <div className="loginBoxu">
        <h3 onClick={close} className="paraxu">
          X
        </h3>
        <h2 className="h2u">¡Crea tu cuenta!</h2>

        <form onSubmit={login}>
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
          <input type="submit" name="" value="Sign In" />
        </form>
        <a className="acompo" href="/" onClick={signU}>
          Ya tengo cuenta. Ingresar.
        </a>
      </div>
    </body>
  );
}

export default withRouter(SignUp);
