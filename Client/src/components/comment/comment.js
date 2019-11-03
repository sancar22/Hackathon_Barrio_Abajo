import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./Comment.css";
import Comments from "./Comments";

function Comment(props) {
  const [currentComment, setCurrentComment] = useState("");
  const [title, setTitle] = useState("");
  const [completeComment, setCompleteComment] = useState([]);
  const submission = () => {
    setCompleteComment([
      ...completeComment,
      { title: title, comment: completeComment }
    ]);
  };

  useEffect(() => {
    console.log(completeComment);
  }, [completeComment]);

  return (
    <div className="page">
      <div className="box  container rounded">
        <div className="row titu text-light">LISTA DE COMENTARIOS</div>
        <div className="row">
          <Comments />
        </div>
        <div className="Newone rounded">
          <div className="text-light">ADD COMMENT</div>
          <div className="form-group">
            <label for="usr">Title:</label>
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={e => setTitle(e.target.value)}
              placeholder="Título"
            />
          </div>
          <div className="form-group">
            <label for="comment">Comment:</label>
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
