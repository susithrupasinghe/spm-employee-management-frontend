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

function App() {
  return (
    <Router>
      <Landing/>
      <Routes>
      <Route excat path="/pm/projectdashboard/:id" element={<ProjectDashboardPage />} />
      <Route excat path="/admin/projectmanagement" element={<AdminProjectManagement />} />
      <Route excat path="/pm/projectmanagement" element={<ProjectManagement />} />
      
      </Routes>
    </Router>
  );
}

export default App;
