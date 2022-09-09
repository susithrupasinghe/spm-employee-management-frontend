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
import ProjectOverview from "./pages/Employee/ProjectOverview/ProjectOverview";
import LoginPage from "./pages/EmployeeManagement/EmployeeLoginPage/EmployeeLoginPage";
import EmployeeDashboard from "./pages/EmployeeManagement/EmployeeDashboard/EmployeeDashboard";
import AddEmployee from "./pages/EmployeeManagement/AddEmployee/AddEmployee";
import AddAtendance from "./pages/EmployeeManagement/AddAttendance/AddAttendance";
import EditProfile from "./pages/EmployeeManagement/EditProfile/EditProfile";
import ProjectManagerDashboard from "./pages/ProjectManager/ProjectManagerDashboard/ProjectManageDashboard";
import Sprint from "./pages/ProjectManager/Sprint/Sprint";
import KanbanChart from "./pages/ProjectManager/Kanban chart/Kanbanchart";
import AdminDashboardPage from "./pages/Admin/AdminDashboard/AdminDashboard";
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

      <Route excat path="/:name/sprint" element={< Sprint/>} />
      <Route excat path="/:name/kanban/:id" element={<KanbanChart />} />

      </Routes>
    </Router>
  );
}

export default App;
