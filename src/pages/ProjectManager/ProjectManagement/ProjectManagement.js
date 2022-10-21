import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
      <div
        className="text-center mt-5"
        style={{ fontSize: "20px", color: "black", float: "left" }}
      >
        <span className="display-6" style={{ fontWeight: "bold" }}>
          Project Management
        </span>
      </div>
    );
  };
  
  const Table = () => {

   const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios("http://localhost:5000/api/project/all");
          setProjects(result.data);
        }
        fetchData();
    }, []);

    console.log(projects);
    const navigate = useNavigate();

    const navigateDashboard = (project) => {
      console.log("sprint " + project.descripton);
      navigate(`/pm/projectdashboard/${project._id}`, {
        state: {
          projectName: project.projectName,
          projectId: project._id,
          onOfEmployee: project.employeeList.length,
          sprints: project.sprintList.length,
          employeeList: project.employeeList,
          projectManager: project.projectManager,
          description: project.descripton,
         },
      });
    }

    return (
      <div style={{ marginTop: "2.5rem" }}>
        <table className="table table-striped">
          <tbody>
            {projects.map((project) => (
            <tr>
              <td>{project._id}</td>
              <td>{project.projectName}</td>
              <td><button type="button" class="btn btn-danger" onClick={()=> {navigateDashboard(project)}}>Manage</button></td>
            </tr>
              )
            )}
            
          </tbody>
        </table>
      </div>
    );
  };
  
  const ProjectManagement = () => {
    return (
      <div className="mt-5 mx-5 px-2">
        <div className="card boderRadiusCards px-5">
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Header />
                </div>
                <div className="col-lg-12">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectManagement;
  