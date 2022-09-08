import {Link} from "react-router-dom";
import recruit from "../../../assets/ProjectManagementDashboard/recruit.svg";
import sprint from "../../../assets/ProjectManagementDashboard/sprintManagement.svg";
import evaluate from "../../../assets/ProjectManagementDashboard/evaluateProject.svg";
const Header = () => {
    return (
        <div className="text-center mt-5" style={{fontSize: "20px", color: "black", float: "right" }}>
            <span className="display-6" style={{fontWeight: "bold"}}>Time table management system</span>
        </div>
    )
}

const CardSection = () => {

    return (
        <div>
            <div className="row mt-4">
                <div className="col-lg-4 p-3">
                    <Link to="/addemployee">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${recruit})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                         
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 p-3">
                    <Link to="/pmlist">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${sprint})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 p-3">
                    <Link to="/adminprojectsdashboard">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardTwo" style={{
                                 backgroundImage: `url(${evaluate})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                    </Link>
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