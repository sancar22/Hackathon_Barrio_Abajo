import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Projects.css";

function Projects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/user/events")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.data);

        setProjects(data.data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row contRow">
        {projects.map((project, index) => (
          <div key={index} className="col-sm-12">
            <div
              className="card m-4 ml-auto mr-auto"
              style={{ width: "18rem" }}
            >
              <img
                src="https://www.pinclipart.com/picdir/big/157-1578186_user-profile-default-image-png-clipart.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text">{project.date}</p>
                <p className="card-text">{project.place}</p>
                <a href="/" className="btn btn-primary m-auto">
                  Ver evento
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default withRouter(Projects);
