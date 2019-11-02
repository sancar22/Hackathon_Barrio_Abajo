import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes/Routes";
import { withRouter } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import {selectButton} from '../../actions'

function Navigation(props) {
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
  );
}
export default withRouter(Navigation);
