import axios from "axios";
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
  const marketingEmployees = employeeList.filter((employee) => employee.department === "marketing");
  const developmentEmployees = employeeList.filter((employee) => employee.department === "development");
  const testingEmployees = employeeList.filter((employee) => employee.department === "testing");
  useEffect(() => {
    const fetchData = async () => {
      setProjectId(location.state.projectId);
      setTitle(location.state.title);
      setEmployeeList(location.state.employeeList);
      axios.get("")
    }
    fetchData();
  },[]);
  console.log(employeeList);

  return(
    <>
    <div className="mt-3 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Marketing</h3>
                <div className="flex">
                <span>employee</span>
                  {marketingEmployees.map((employee) => (
                    <span>{employee}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-3 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <h3>Development</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-3 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <h3>Testing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
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
