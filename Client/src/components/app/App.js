import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import SignUp from "../signUp/SignUp";
import * as ROUTES from "../../routes/Routes";
import _ from "lodash";

//import Navigation from '../navigation/Navigation'

function App() {
   
    

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
        </Switch>
      </div>
    </Router>
  ) 
}

export default App;
