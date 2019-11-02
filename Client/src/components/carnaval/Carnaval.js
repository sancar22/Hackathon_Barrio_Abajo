import React from "react";
import { withRouter } from "react-router-dom";
import "./Carnaval.css";

function Carnaval(props) {
  return (
    <div className="backCar container-fluid">
      <h1 className="titleCar">CASA DEL CARNAVAL</h1>
      <div className="row">
        <p className="textCar col-sm-4">
          <li>
            Esta antigua casona de estilo neocolonial fue rescata, en palabras
            de Mora (2009), de las &#39;garras&#39; de una chatarrería que
            empezó siendo un colegio. El sitio no podía ser otro que el barrio
            Abajo, zona popular donde nacieron las danzas típicas que llegaron
            por el río y que hoy siguen alegrando las comparsas. Es uno de los
            atractivos más reconocidos de la ciudad y actualmente impulsa la
            recuperación patrimonial del sector a través de varios elementos de
            la identidad Barranquillera.
          </li>
        </p>
      </div>
    </div>
  );
}

export default withRouter(Carnaval);
