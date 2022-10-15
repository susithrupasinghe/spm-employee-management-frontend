import {Link, useLocation, useNavigate} from "react-router-dom";
import recruit from "../../../assets/ProjectManagementDashboard/recruit.svg";
import sprint from "../../../assets/ProjectManagementDashboard/sprintManagement.svg";
import evaluate from "../../../assets/ProjectManagementDashboard/evaluateProject.svg";
const Header = () => {
    const location = useLocation();
    const title = location.state.projectName;
    const id = location.state.projectId;
    const noOfEmployee = location.state.onOfEmployee;
    const sprints = location.state.sprints;
    // console.log("title",title);

    return (
        <div className="text-center mt-5" style={{fontSize: "20px", color: "black", float: "right" }}>
            <span className="display-6" style={{fontWeight: "bold"}}>{title}</span>
            <br/>
            <span>No of Employees : {noOfEmployee}</span>
            <br/>
            <span>No of sprints: {sprints}</span>
        </div>
    )
}

const CardSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const title = location.state.projectName;
    const id = location.state.projectId;
    const noOfEmployee = location.state.onOfEmployee;
    const sprints = location.state.sprints;
    const employeeList = location.state.employeeList;
    const projectManager = location.state.projectManager;
    const description = location.state.description;
    console.log("title: ",description);
    const employeeNavigate = () => {
        navigate(`/pm/projectdashboard/${id}/add`, {
            state: {
                title: title,
                projectId: id,
                employeeList: employeeList,
            }
        })
    }

    const reportNavigate = () => {
        navigate(`/project/report/${id}`, {
            state: {
                title: title,
                projectId: id,
                employeeList: employeeList,
                sprints: sprints,
                projectManager: projectManager,
                description: description,
            }
        })
    }
    return (
        <div>
            <div className="row mt-4" >
                <div className="col-lg-4 p-3" onClick={employeeNavigate}>
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${recruit})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                         
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 p-3">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${sprint})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 p-3" onClick={reportNavigate}>
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardTwo" style={{
                                 backgroundImage: `url(${evaluate})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

const ProjectDashboardPage = () => {
    return(
        <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12"><Header/></div>
                <div className="col-lg-12"><CardSection/></div>
              </div>
            </div>
          </div>
    )
}

export default ProjectDashboardPage;