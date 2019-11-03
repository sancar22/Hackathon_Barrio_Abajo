import React from "react";
import { withRouter } from "react-router-dom";
import "./Aduana.css";

function Aduana(props) {
  return (
   
    <div className="backAdu container-fluid">
      <h1 className="titleAdu">EDIFICIO DE LA ADUANA</h1>
      <div className="row">
        <p className="textAdu col-sm-6">
          <li>
            A consideración de Artuz. A (2012), el edificio de La Aduana es un
            destino obligado para quienes visitan Barranquilla. Fue construido
            en 1919 y representa la trascendencia de los negocios de importación
            a través del puerto local.
          </li>
          <li>
            Desde el 2002, en este edifico funcionan las oficinas
            administrativas de la Cámara de Comercio, además de ser el epicentro
            de la actividad gremial, la investigación, la cultura, etc.
          </li>
          <li>
            Un problema que se evidencia en Barranquilla con relación a este
            edificio emblemático, sería el poco interés y desconocimiento propio
            de algunos Barranquilleros frente a las funciones, características,
            y labores que se desarrollan dentro del mismo.
          </li>
        </p>
      </div>
    </div>
   
  );
}

export default withRouter(Aduana);
