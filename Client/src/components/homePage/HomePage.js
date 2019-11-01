import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navigation from '../navigation/Navigation'


function HomePage(props) {
  

  return (
    <Navigation/>
  );
  
}

export default withRouter(HomePage);
