import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  correctButton,
  deCorrectButton,
  closeButton,
  closeButtonSP,
  openEventsCreator
} from "../../actions/index";
import "./Projects.css";
import Proposal from "../proposal/Proposal";
import Createevent from "../createevent/Createevent";

function Projects(props) {
  const dispatch = useDispatch();
  const controller = useSelector(state => state.correctEvent);
  const controller2 = useSelector(state => state.eventCreate);
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState(false);
  const [cultural, setCultural] = useState(false);
  const [aseo, setAseo] = useState(false);
  const [deportiva, setDeportiva] = useState(false);
  const [event, setEvent] = useState();
  const myRef = useRef(null);

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        dispatch(deCorrectButton());
        dispatch(closeButton());
        dispatch(closeButtonSP());
      }
    };
  });
  const executeScroll1 = () => {
    scrollToRef(myRef);
  };
  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop - 80);
    //ref.current.focus()
  };
  const handleClickEvent = data => {
    dispatch(correctButton());
    executeScroll1();
    setEvent(data);
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
  let propo = event ? (
    <Proposal
      id={event.id}
      title={event.title}
      desc={event.description}
      date={event.date}
      place={event.place}
      contact={event.contact}
    />
  ) : (
    ""
  );

  return (
    <div className="zindex" style={{ position: "relative" }}>
      <div
        ref={myRef}
        style={{ visibility: controller ? "visible" : "hidden" }}
      >
        {propo}
      </div>
      <div
        style={{
          visibility: controller2 ? "visible" : "hidden",
          position: "relative"
        }}
      >
        <Createevent />
      </div>
      <div style={{ opacity: controller ? 0.3 : 1 }}>
        <div className="container">
          <div className="flat">
            <h1 style={{ fontWeight: "bold", color: "white" }}>
              Eventos Llavería
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
                  fetch("http://localhost:4000/api/v1/user/events")
                    .then(response => {
                      return response.json();
                    })
                    .then(data => {
                      setProjects(data.data);
                    })
                    .then(() => {
                      if (projects.length > 0) {
                        if (social) {
                          setProjects(
                            projects.filter(project => {
                              return project.category == "social";
                            })
                          );
                        }
                        if (cultural) {
                          setProjects(
                            projects.filter(project => {
                              return project.category == "cultural";
                            })
                          );
                        }
                        if (aseo) {
                          setProjects(
                            projects.filter(project => {
                              return project.category == "aseo";
                            })
                          );
                        }
                        if (deportiva) {
                          setProjects(
                            projects.filter(project => {
                              return project.category == "deportivo";
                            })
                          );
                        }
                      }
                    });
                }}
                className={`btn filterBtn filt`}
              >
                Filtrar
              </div>
              <div
                onClick={() => {
                  dispatch(openEventsCreator(true));
                }}
                className="RegEvent btn btn-secondary ml-auto"
              >
                Crear evento
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
                        onClick={() => {
                          handleClickEvent(project);
                        }}
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
