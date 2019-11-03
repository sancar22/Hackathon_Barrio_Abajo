import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {selectHome } from "../../actions";
import "./Proposal.css";

function Proposal(props) {
    const dispatch = useDispatch()
  
const displayHome = useSelector(state => state.initHome);

  return (
     <div className="divaDaza">Hello</div>
  );
}
export default withRouter(Proposal);
