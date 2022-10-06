import axios from "axios";
import { useEffect, useState } from "react";

import {useNavigate } from "react-router-dom";


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

function toTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/project/all");
      setProjects(result.data);
    };
    fetchData();
  }, []);

  console.log(projects);


const navigate = useNavigate()

const handleKandban = (id) => {
  navigate(`/${id}/kanban`, {
    state: {
      
    }
  })
}
console.log(projects);



  const navigateDashboard = (project) => {
    navigate(`/:name/kanban/${project._id}`, {
      state: {
        projectName: project.projectName,
        projectId: project._id,
        projectManager: project.projectManager,
        
      },
    });
  };
 
  return (

    <div class="card" style={{marginTop: "2rem"}}>
  <div class="card-body">
    <div style={{marginBottom: "1rem"}}>
      <h3>Projects</h3>
      <span style={{color: "gray"}}>29/Aug/22 10.20AM  -  12/Sep/22 11.20 AM</span>
    </div>
    <div>
    <div class="row">
      {projects.map((project) => (
        
      
  <div class="col-sm-3">
    <div class="card" style={{borderRadius: "15%", marginTop: "1rem"}}>
      <div class="card-body">
        <span>{project._id}</span>
        <h5 class="card-title" style={{fontWeight: "bold", fontSize: "1.5rem"}}>{project.projectName}</h5>
        <span>Project Manager: </span>
        <br/>
        <span style={{color: "#FD0054", fontSize: "1.5rem"}}>{project.projectManager.name}</span>
        <div style={{display: "flex", gap: "2rem", padding: "1rem 2rem"}}>
          <div style={{borderRadius: "50%", backgroundColor: "red", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
          <div style={{borderRadius: "50%", backgroundColor: "orange", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
          <div style={{borderRadius: "50%", backgroundColor: "green", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
        </div>
      </div>
        <div style={{display: "flex"}}>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 15px", borderBottomLeftRadius: "15%", marginRight: "2px"}}>Documentation</button>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 25px", borderBottomRightRadius: "15%"}} onClick={() => {handleKandban(project._id)}}>Kanban Layout</button>
        </div>
    </div>
  </div>
  ))}
  {/* <div class="col-sm-3">
    <div class="card" style={{borderRadius: "15%"}}>
      <div class="card-body">
        <span>P_001</span>
        <h5 class="card-title" style={{fontWeight: "bold", fontSize: "1.5rem"}}>E-commerce Website</h5>
        <span>Project Manager: </span>
        <br/>
        <span style={{color: "#FD0054", fontSize: "1.5rem"}}>Sasindu Nanayakkara</span>
        <div style={{display: "flex", gap: "2rem", padding: "1rem 2rem"}}>
          <div style={{borderRadius: "50%", backgroundColor: "red", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
          <div style={{borderRadius: "50%", backgroundColor: "orange", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
          <div style={{borderRadius: "50%", backgroundColor: "green", width: "50px", height: "40px", lineHeight: "40px", textAlign:"center", MozBorderRadius: "50%", WebkitBorderRadius: "50%", color: "white"}}>1</div>
        </div>
      </div>
        <div style={{display: "flex"}}>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 15px", borderBottomLeftRadius: "15%", marginRight: "2px"}}>Documentation</button>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 25px", borderBottomRightRadius: "15%"}}>Kanban Layout</button>
        </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card" style={{borderRadius: "15%"}}>

    <div class="card" style={{ marginTop: "2rem" }}>

      <div class="card-body">
        <div style={{ marginBottom: "1rem" }}>
          <h3>Projects</h3>
          <span style={{ color: "gray" }}>
            29/Aug/22 10.20AM - 12/Sep/22 11.20 AM
          </span>
        </div>
        <div>
          <div class="row">
          {projects.map((project) => (
            <div class="col-sm-3">
                <div class="card" style={{ borderRadius: "15%" }}>
                  <div class="card-body">
                     <span>{project._id}</span>
                      <h5 class="card-title" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                        {project.projectName}
                      </h5>
                    <span>Project Manager: </span>
                    <br />
                    <span style={{ color: "#FD0054", fontSize: "1.5rem" }}>
                    {/* {project.projectManager} */}
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
                        1
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
                    <button
                      type="button"
                      class="btn btn-secondary"
                      style={{
                        padding: "5px 15px",
                        borderBottomLeftRadius: "40%",
                        marginRight: "2px",
                      }}
                    >
                      Documentation
                    </button>
                    <button onClick={()=> {navigateDashboard(project)}}
                      type="button"
                      class="btn btn-secondary"
                      style={{
                        padding: "5px 25px",
                        borderBottomRightRadius: "40%",
                      }}
                    >
                      Kanban Layout
                    </button>
                  </div>
                </div> 
            </div> ))}
            {/* <div class="col-sm-3">
              <div class="card" style={{ borderRadius: "15%" }}>
                <div class="card-body">
                  <span>P_001</span>
                  <h5
                    class="card-title"
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    E-commerce Website
                  </h5>
                  <span>Project Manager: </span>
                  <br />
                  <span style={{ color: "#FD0054", fontSize: "1.5rem" }}>
                    Sasindu Nanayakkara
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
                      1
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
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 15px",
                      borderBottomLeftRadius: "15%",
                      marginRight: "2px",
                    }}
                  >
                    Documentation
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 25px",
                      borderBottomRightRadius: "15%",
                    }}
                  >
                    Kanban Layout
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div class="col-sm-3">
              <div class="card" style={{ borderRadius: "15%" }}>
                <div class="card-body">
                  <span>P_001</span>
                  <h5
                    class="card-title"
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    E-commerce Website
                  </h5>
                  <span>Project Manager: </span>
                  <br />
                  <span style={{ color: "#FD0054", fontSize: "1.5rem" }}>
                    Sasindu Nanayakkara
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
                      1
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
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 15px",
                      borderBottomLeftRadius: "15%",
                      marginRight: "2px",
                    }}
                  >
                    Documentation
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 25px",
                      borderBottomRightRadius: "15%",
                    }}
                  >
                    Kanban Layout
                  </button>
                </div>
              </div>
            </div> */}
            {/* <div class="col-sm-3">
              <div class="card" style={{ borderRadius: "15%" }}>
                <div class="card-body">
                  <span>P_001</span>
                  <h5
                    class="card-title"
                    style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                  >
                    E-commerce Website
                  </h5>
                  <span>Project Manager: </span>
                  <br />
                  <span style={{ color: "#FD0054", fontSize: "1.5rem" }}>
                    Sasindu Nanayakkara
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
                      1
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
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 15px",
                      borderBottomLeftRadius: "15%",
                      marginRight: "2px",
                    }}
                  >
                    Documentation
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{
                      padding: "5px 25px",
                      borderBottomRightRadius: "15%",
                    }}
                  >
                    Kanban Layout
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

        <div style={{display: "flex"}}>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 15px", borderBottomLeftRadius: "15%", marginRight: "2px"}}>Documentation</button>
        <button type="button" class="btn btn-secondary" style={{padding: "5px 25px", borderBottomRightRadius: "15%"}}>Kanban Layout</button>
        </div>
    </div>
  </div> */}
</div>

    </div>
  );
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
