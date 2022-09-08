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
import LoginPage from "./pages/EmployeeManagement/EmployeeLoginPage/EmployeeLoginPage";
function App() {
  return (
    <Router>
      <Landing/>
      <Routes>
      <Route excat path="/pm/projectdashboard" element={<ProjectDashboardPage />} />
      <Route excat path="/admin/projectmanagement" element={<AdminProjectManagement />} />
      <Route excat path="/pm/projectmanagement" element={<ProjectManagement />} />
      <Route excat path="/emplogin" element={<LoginPage />} />
      
      </Routes>
    </Router>
  );
}

export default App;
