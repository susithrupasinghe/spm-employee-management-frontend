import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './common/header/headerComponent';

import './App.css';

import AdminProjectManagement from "./pages/Admin/AdminProjectManagement/AdminProjectManagement";
import ProjectDashboardPage from "./pages/ProjectManager/ProjectDashboard/projectDashboard";
import ProjectManagement from "./pages/ProjectManager/ProjectManagement/ProjectManagement";
import ProjectOverview from "./pages/EmployeeManagement/ProjectOverview/ProjectOverview";
import LoginPage from "./pages/EmployeeManagement/EmployeeLoginPage/EmployeeLoginPage";
import EmployeeDashboard from "./pages/EmployeeManagement/EmployeeDashboard/EmployeeDashboard";
import AddEmployee from "./pages/EmployeeManagement/AddEmployee/AddEmployee";
import AddAtendance from "./pages/EmployeeManagement/AddAttendance/AddAttendance";
import EditProfile from "./pages/EmployeeManagement/EditProfile/EditProfile";
import ProjectManagerDashboard from "./pages/ProjectManager/ProjectManagerDashboard/ProjectManageDashboard";
import Sprint from "./pages/ProjectManager/Sprint/Sprint";
import KanbanChart from "./pages/ProjectManager/Kanban chart/Kanbanchart";
import AdminDashboardPage from "./pages/Admin/AdminDashboard/AdminDashboard";
import AddDomentation from "./pages/EmployeeManagement/ProjectDocumentation/AddDocumentation"
import ViewDomentation from "./pages/EmployeeManagement/ProjectDocumentation/ViewDocumentation"
import RecruitEmployee from "./pages/ProjectManager/RecruitEmployee/RecruitEmployee";
import UpdateDocumentation from "./pages/EmployeeManagement/ProjectDocumentation/UpdateDocumentation"
import EvaluateProject from "./pages/ProjectManager/ProjectEvaluvate/EvaluateProject";
import ProjectManagerLogin from "./pages/ProjectManager/ProjectManagerLogin/ProjectManagerLogin";
import AdminLogin from "./pages/Admin/AdminLoginPage/AdminLogin";
import Issues from "./pages/ProjectManager/Issues/Issues";
import DeleteDocumentation from "./pages/EmployeeManagement/ProjectDocumentation/DeleteDocumentation"


function App() {
  return (
    <Router>
      <Landing/>
      <Routes>
      <Route excat path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route excat path="/pm/projectdashboard/:id" element={<ProjectDashboardPage />} />
      <Route excat path="/admin/projectmanagement" element={<AdminProjectManagement />} />
      <Route excat path="/pm/projectmanagement" element={<ProjectManagement />} />
      <Route excat path="/emplogin" element={<LoginPage />} />
      <Route excat path="/employee/dashboard" element={<EmployeeDashboard />} />
      <Route excat path="/employee/add" element={<AddEmployee />} />
      <Route excat path="/employee/addAttendance" element={<AddAtendance />} />
      <Route excat path="/editprofile/:id" element={<EditProfile />} />
      
      <Route excat path="/:name/overview" element={< ProjectOverview/>} />
      <Route excat path="/pm/dashboard" element={<ProjectManagerDashboard />} />

      <Route excat path="/:id/sprint" element={< Sprint/>} />

      <Route excat path="/kanban/:id" element={<KanbanChart />} />
      <Route excat path="/project/overview" element={< ProjectOverview/>} />
      <Route excat path="/project/addDocumentation/:id" element={< AddDomentation/>} />
      <Route excat path="/project/viewDocumentation/:id" element={< ViewDomentation/>} />
      <Route excat path="/pm/projectdashboard/:id/add" element={< RecruitEmployee/>} />
      <Route excat path="/project/updateDocumentation/:id" element={<UpdateDocumentation/>}/>
      <Route excat path="/project/report/:id" element={<EvaluateProject/>} />
      <Route excat path="/pmlogin" element={<ProjectManagerLogin/>} />
      <Route excat path="/adminlogin" element={<AdminLogin />} />
      <Route excat path="/:id/issues" element={<Issues />} />
      <Route excat path="/project/deleteDocumentation/:id" element={<DeleteDocumentation/>}/>


      {/* <Route excat path="/:name/kanban/:id" element={<KanbanChart />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
