import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Comment.css";
import Comments from "./Comments";

function Comment(props) {
  const [currentComment, setCurrentComment] = useState("");
  const [title, setTitle] = useState("");
  const commentID = useSelector(state => state.proposalID);
  const submission = e => {
    let data = {
      comment: {
        event_id: commentID,
        title: title,
        text: currentComment
      }
    };
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    fetch("http://localhost:4000/api/v1/user/comment", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setTitle("");
        setCurrentComment("");
      });
  };

  return (
    <div className="page">
      <div className="box container rounded">
        <div className="row titu text-light">LISTA DE COMENTARIOS</div>
        <div className="row">
          <Comments />
        </div>
        <div className="Newone rounded">
          <div className="text-light">Añadir comentario</div>
          <div className="form-group">
            <label for="usr">Titulo:</label>
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={e => setTitle(e.target.value)}
              placeholder="Título"
            />
          </div>
          <div className="form-group">
            <label for="comment">Comentario:</label>
            <textarea
              value={currentComment}
              onChange={e => setCurrentComment(e.target.value)}
              className="form-control"
              rows="3"
              id="comment"
              placeholder="Colocar su comentario"
            ></textarea>
          </div>
          <button onClick={submission} className="btn btn-primary">
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Comment);
