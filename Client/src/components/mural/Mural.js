import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeButton } from "../../actions";
import "./Mural.css";

function Mural(props) {
  return (
    <div className="backMu container-fluid">
      <h1 className="titleMu">PAR VIAL DE LA CARRERA 50</h1>
      <div className="row">
        <p className="textMu col-sm-5">
          El Par Vial de la carrera 50 se ha convertido en una vía que han
          tomado varios festivales de arte urbano y artistas plásticos como
          lienzo para expresar sus obras en grafiti. Sus altos muros debido a
          sus amplias dimensiones ofrecen el espacio ideal para llenar de
          colorido la zona. También se ha convertido en espacio cultural con
          eventos de Carnaval y festividades como ‘Baila la calle’ que ha
          logrado reunir a más 60.000 personas en torno a actividades artísticas
          y culturales.
        </p>
      </div>
    </div>
  );
}

export default withRouter(Mural);
