import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Comments.css";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const commentID = useSelector(state => state.proposalID);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/user/comments", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        comments: {
          event_id: commentID
        }
      })
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setComments(data.data);
        console.log(data.data);
      });
  }, []);

  let totalComments = comments.map(comment => {
    return (
      <div key={comment.id} className="card w-75 comm">
        <div className="card-body">
          <h5 className="card-title">{comment.title}</h5>
          <p className="card-text">{comment.text}</p>
        </div>
      </div>
    );
  });
  return <div>{totalComments}</div>;
}

export default withRouter(Comments);
