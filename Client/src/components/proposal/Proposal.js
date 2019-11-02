import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Proposal.css";

function Proposal(props) {
  return (<div className="proposalCSS">
    <div className="card" style={{width: "18rem"}}>
  <img src="https://www.eltiempo.com/files/article_main/files/crop/uploads/2018/10/09/5bbd043e438b9.r_1539116063755.0-193-3000-1693.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
  </div>
  <div className="card-body">
    <Link to="" className="card-link">Participar</Link>
    <Link to="" className="card-link">Comentar</Link>
  </div>
</div>
  </div>);
}
export default withRouter(Proposal);
