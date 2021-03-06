import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./Proposal.css";
import {
  selectButton,
  deCorrectButton,
  closeButton,
  setProposalID
} from "../../actions";

function Proposal(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(closeButton());
      }
    };
  });
  dispatch(setProposalID(props.id));

  const commentEvent = id => {
    const token = sessionStorage.getItem("token");
    if (token) {
      props.history.push("/comment");
    } else {
      dispatch(selectButton());
    }
  };
  const joinEvent = id => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetch("http://localhost:4000/api/v1/user/joinevent", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token
        },
        method: "POST",
        body: JSON.stringify({
          event: {
            event_id: id
          }
        })
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          dispatch(deCorrectButton());
        });
    } else {
      dispatch(selectButton());
    }
  };
  return (
    <div className="proposalCSS">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.eltiempo.com/files/article_main/files/crop/uploads/2018/10/09/5bbd043e438b9.r_1539116063755.0-193-3000-1693.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
        </div>
        <div className="card-body">
          <div
            onClick={() => {
              joinEvent(props.id);
            }}
            className="card-link btn btn-primary"
          >
            Participar
          </div>
          <div
            onClick={() => {
              commentEvent(props.id);
            }}
            className="card-link  btn btn-primary"
          >
            Comentar
          </div>
        </div>
      </div>
      <SignIn />
      <SignUp />
    </div>
  );
}
export default withRouter(Proposal);
