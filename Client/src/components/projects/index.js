import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {correctButton, deCorrectButton} from '../../actions/index'
import "./Projects.css";
import Proposal from "../proposal/Proposal";

function Projects(props) {
  const dispatch = useDispatch()
  const controller = useSelector((state)=> state.correctEvent)
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState(false);
  const [cultural, setCultural] = useState(false);
  const [aseo, setAseo] = useState(false);
  const [deportiva, setDeportiva] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(deCorrectButton());
      }
    };
  });
  const executeScroll1 = () => {
    scrollToRef(myRef);
  };
  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop);
    //ref.current.focus()
  };
  const handleClickEvent = () => {
    dispatch(correctButton());
    executeScroll1();
  };
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/user/events")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProjects(data.data);
      });
  }, []);

  return (
    <div>
      <div
        ref={myRef}
        style={{ visibility: controller ? "visible" : "hidden" }}
      >
        <Proposal />{" "}
      </div>
      }
      <div style={{ opacity: controller ? 0.3 : 1 }}>
        <div className="container">
          <div className="flat">
            <h1 style={{ fontWeight: "bold", color: "white" }}>
              Eventos Llaveria
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div
                onClick={() => {
                  setSocial(!social);
                  setCultural(false);
                  setAseo(false);
                  setDeportiva(false);
                }}
                className={`btn filterBtn ${social ? "active" : ""}`}
              >
                Social
              </div>
              <div
                onClick={() => {
                  setSocial(false);
                  setCultural(!cultural);
                  setAseo(false);
                  setDeportiva(false);
                }}
                className={`btn filterBtn ${cultural ? "active" : ""}`}
              >
                Cultural
              </div>
              <div
                onClick={() => {
                  setSocial(false);
                  setCultural(false);
                  setAseo(!aseo);
                  setDeportiva(false);
                }}
                className={`btn filterBtn ${aseo ? "active" : ""}`}
              >
                Aseo
              </div>
              <div
                onClick={() => {
                  setSocial(false);
                  setCultural(false);
                  setAseo(false);
                  setDeportiva(!deportiva);
                }}
                className={`btn filterBtn ${deportiva ? "active" : ""}`}
              >
                Deportiva
              </div>
              <div
                onClick={() => {
                  console.log(projects);
                  if (social) {
                    setProjects(
                      projects.filter(project => {
                        return project.category !== "social";
                      })
                    );
                  }
                  if (cultural) {
                    setProjects(
                      projects.filter(project => {
                        return project.category !== "cultural";
                      })
                    );
                  }
                  if (aseo) {
                    setProjects(
                      projects.filter(project => {
                        return project.category !== "aseo";
                      })
                    );
                  }
                  if (deportiva) {
                    setProjects(
                      projects.filter(project => {
                        return project.category !== "deportivo";
                      })
                    );
                  }
                }}
                className={`btn filterBtn filt`}
              >
                Filtrar
              </div>
            </div>
          </div>
          <div className="container-fluid mr-auto ml-4">
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-sm-4 mt-5">
                  <div
                    className="card borders w-55 h-35"
                    style={{
                      width: "18rem"
                    }}
                  >
                    <img
                      src="https://www.eltiempo.com/files/article_main/files/crop/uploads/2018/10/09/5bbd043e438b9.r_1539116063755.0-193-3000-1693.jpeg"
                      className="card-img-top img-fluid p-2"
                      style={{ borderRadius: "20px" }}
                      alt="..."
                    />
                    <div className="card-body mr-auto ml-auto text-center">
                      <h5 className="card-title mr-auto ml-auto text-center">
                        {project.title}
                      </h5>
                      <p className="card-text mr-auto ml-auto text-center">
                        {project.date}
                      </p>
                      <p className="card-text mr-auto ml-auto text-center">
                        {project.place}
                      </p>
                      <div
                        onClick={handleClickEvent}
                        className="btn btn-primary  mr-auto ml-auto text-center"
                      >
                        Ver evento
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Projects);
