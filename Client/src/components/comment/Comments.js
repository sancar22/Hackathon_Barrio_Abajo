import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Comments.css";

function Comments(props) {
  const comments = [
    { title: "Hello", comment: "Saul cagá" },
    { title: "Gola", comment: "Saul" },
    { title: "Perro", comment: "Sauli" },
    { title: "He", comment: "davidaza" }
  ];

  let totalComments = comments.map(comment => {
    return (
      <div className="card w-75 comm">
        <div className="card-body">
          <h5 className="card-title">{comment.title}</h5>
          <p className="card-text">{comment.comment}</p>
        </div>
      </div>
    );
  });
  return <div>{totalComments}</div>;
}

export default withRouter(Comments);
