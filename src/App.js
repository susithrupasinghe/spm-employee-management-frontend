import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './common/header/headerComponent';

import './App.css';
import ProjectManagement from "./pages/ProjectManager/ProjectDashboard/projectDashboard";

function App() {
  return (
    <Router>
      <Landing/>
      <Routes>
      <Route excat path="/pm/projectmanagement" element={<ProjectManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
