import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="text-center mt-3"
      style={{ fontSize: "20px", color: "black", float: "left" }}
    >
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Recruit Employee
      </span>
    </div>
  );
};

const Employees = () => {
  const location = useLocation();
  const [projectId, setProjectId ] = useState("");
  const [title, setTitle] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setProjectId(location.state.projectId);
      setTitle(location.state.title);
      setEmployeeList(location.state.employeeList);
    }
    fetchData();
  },[]);

  return(
    <div className="mt-3 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


function RecruitEmployee() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
      </div>
      <Employees/>
    
    </>
  );
}

export default RecruitEmployee;
