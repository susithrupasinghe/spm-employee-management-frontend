import axios from "axios";
import { Tooltip, Col } from "antd";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Clock from "react-live-clock";

const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "left" }}
    >
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Project Overview
      </span>
    </div>
  );
};

// function toTimestamp(strDate) {
//   var datum = Date.parse(strDate);
//   return datum / 1000;
// }

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:5000/api/employee/readEmployeeProject?id=617cb274eb7f2f0016bbcd44"
      );
      setProjects(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

    const navigateDocumentation = (id) => {
      navigate(`/project/viewDocumentation/${id}`, {
        state: {},
      });
    };

    const handleKandban = (project) => {
      navigate(`/${project._id}/kanban`, {
        state: {},
      });
    };

    const navigateDashboard = (project) => {
      navigate(`/:name/kanban/${project._id}`, {
        state: {
          projectName: project.projectName,
          projectId: project._id,
          projectManager: project.projectManager,
        },
      });
    };

  if (loading) {
    return (
      <>
        <p>Data Loading</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <p>Error: {error}</p>
      </>
    );
  } else {
    // const empProject = projects.payload.map((response) => {

    //   console.log(response)
    //   return {
    //     _id: response._id,
    //     projectName: response.projectName,
    //     projectManager: response.projectManager,
    //   }
    // })

    
 
    return (
      <div class="card" style={{ marginTop: "2rem" }}>
        <div class="card-body">
          <div style={{ marginBottom: "1rem" }}>
            <h3>Projects</h3>
            {/* <span style={{color: "gray"}}  format="YYYY/MM/DD:HH:mm:ss" interval={1000} ticking={true}>29/Aug/22 10.20AM  -  12/Sep/22 11.20 AM</span> */}
          </div>
          <div>
            <Clock
              style={{
                marginLeft: "20px",
                color: "grey",
                marginBottom: "50px",
              }}
              format="YYYY/MM/DD:HH:mm:ss"
              interval={1000}
              ticking={true}
            />
          </div>
          <div
            class="card"
            style={{ background: "F2F2F2", width: "rem", marginTop: "2.5%" }}
          >
            <div class="row">
              {projects.data.Project.map((project) => (
                <div class="col-sm-3">
                  <div
                    class="card"
                    style={{ borderRadius: "15%", marginTop: "1rem" }}
                  >
                    <div class="card-body">
                      <span>{project._id}</span>
                      <h5
                        class="card-title"
                        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        {project.projectName}
                      </h5>
                      <span>Project Manager: </span>
                      <br />
                      <span style={{ color: "#FD0054", fontSize: "1.5rem" }}>
                        {project.projectManager.name}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          gap: "2rem",
                          padding: "1rem 2rem",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "red",
                            width: "50px",
                            height: "40px",
                            lineHeight: "40px",
                            textAlign: "center",
                            MozBorderRadius: "50%",
                            WebkitBorderRadius: "50%",
                            color: "white",
                          }}
                        >
                          {project.sprintList ? "4" : ""}
                        </div>
                        <div
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "orange",
                            width: "50px",
                            height: "40px",
                            lineHeight: "40px",
                            textAlign: "center",
                            MozBorderRadius: "50%",
                            WebkitBorderRadius: "50%",
                            color: "white",
                          }}
                        >
                          1
                        </div>
                        <div
                          style={{
                            borderRadius: "50%",
                            backgroundColor: "green",
                            width: "50px",
                            height: "40px",
                            lineHeight: "40px",
                            textAlign: "center",
                            MozBorderRadius: "50%",
                            WebkitBorderRadius: "50%",
                            color: "white",
                          }}
                        >
                          1
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      {/* <Tooltip title="Edit Transfusion Details">
                      <Col span={6}>
                        <a
                          href={`../bloodbank/update-transfusion?bagId=${project._id}`}
                        ></a>
                      </Col>
                    </Tooltip> */}
                      <button
                        type="button"
                        class="btn btn-secondary"
                        style={{
                          padding: "5px 15px",
                          borderBottomLeftRadius: "5%",
                          marginRight: "2px",
                        }}
                        onClick={() => {
                          navigateDocumentation(project._id);
                        }}
                      >
                        Documentation
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        style={{
                          padding: "5px 25px",
                          borderBottomRightRadius: "5%",
                        }}
                        onClick={() => {
                          // handleKandban(project._id);
                        }}
                      >
                        Kanban Layout
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ProjectOverview = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="col-lg-12">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
