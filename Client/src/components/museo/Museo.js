import React from "react";
import { withRouter } from "react-router-dom";
import "./Museo.css";

function Museo(props) {
  return (
    <div className="backMus container-fluid">
      <h1 className="titleMus">MUSEO DEL CARIBE</h1>
      <div className="row">
        <div className="col-sm-5" />
        <p className="textMus col-sm-4">
          <li>Sería el primer museo regional del Colombia.</li>
          <li>
            Promueve la participación del visitante, lo invita a que pregunte,
            pruebe, escuche, baile, toque. A diferencia de otros museos de la
            cultura que exponen objetos arqueológicos, cuadros y piezas
            históricas, el valor simbólico en el Museo del Caribe está en la
            impresión que se produce por medio de la experiencia sensorial y no
            en el objeto mismo (Prada, 2013).
          </li>
          <li>
            Ha tenido varias crisis relacionadas con una situación financiera,
            embargos, y cambios constantes de administración.
          </li>
        </p>
      </div>
    </div>
  );
}

export default withRouter(Museo);
