import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import SignUp from "../signUp/SignUp";
import Aduana from "../aduana/Aduana";
import Mural from "../mural/Mural";
import Museo from "../museo/Museo";
import Intro from "../intro/Intro"
import Carnaval from "../carnaval/Carnaval";

import Projects from "../projects";
import * as ROUTES from "../../routes/Routes";

import Navigation from "../navigation/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.ADUANA} component={Aduana} />
          <Route exact path={ROUTES.MURAL} component={Mural} />
          <Route exact path={ROUTES.MUSEO} component={Museo} />
          <Route exact path={ROUTES.PROJECTS} component={Projects} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route exact path={ROUTES.CARNAVAL} component={Carnaval} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
