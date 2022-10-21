import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {GoDiffAdded} from "react-icons/go";
import {GoDiffRemoved} from "react-icons/go";
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
  const [allEmployeeList, setAllEmployeeList] = useState([]);
  const marketingEmployees = employeeList.filter((employee) => employee.department === "marketing");
  const developmentEmployees = employeeList.filter((employee) => employee.department === "development");
  const testingEmployees = employeeList.filter((employee) => employee.department === "testing");
  const allMarketingEmployees = allEmployeeList.filter((employee) => employee.department === "marketing" && employee.projectId !== projectId);
  const allDevelopmentEmployees = allEmployeeList.filter((employee) => employee.department === "development" && employee.projectId !== projectId);
  const allTestingEmployees = allEmployeeList.filter((employee) => employee.department === "testing" && employee.projectId !== projectId);
  useEffect(() => {
    const fetchData = async () => {
      setProjectId(location.state.projectId);
      setTitle(location.state.title);
      setEmployeeList(location.state.employeeList);
      axios.get("http://localhost:5000/api/employee/all")
      .then((result) => {
        setAllEmployeeList(result.data);
      })
    }
    fetchData();
  },[]);
  console.log(allEmployeeList);

  const addEmployeeToProject = (id) => {
    const employee = axios.put(`http://localhost:5000/api/project/addemp/${projectId}`, {
      _id: id
    });
    if (employee) {
      alert("Employee added to project");
      window.location.reload();
    }
  }

  return(
    <>
    <div className="mt-3 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Marketing</h3>
                <div className="d-flex justify-content-between">
                <span>employee</span>
                <GoDiffAdded/>

                  {marketingEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee}</span>
                      <GoDiffRemoved/>
                    </div>
                  ))}
                  {allMarketingEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee.firstName} {employee.lastName}</span>
                      <GoDiffAdded onClick={addEmployeeToProject}/>
                    </div>
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
              <div className="">
                  {developmentEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee.firstName} {employee.lastName}</span>
                      <GoDiffRemoved/>
                    </div>
                  ))}
                  {allDevelopmentEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee.firstName} {employee.lastName}</span>
                      <GoDiffAdded onClick={addEmployeeToProject}/>
                    </div>
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
              <h3>Testing</h3>
              <div className="">
                  {testingEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee}</span>
                      <GoDiffRemoved/>
                    </div>
                  ))}
                  {allTestingEmployees.map((employee) => (
                    <div className="d-flex justify-content-between">
                      <span>{employee.firstName} {employee.lastName}</span>
                      <GoDiffAdded onClick={addEmployeeToProject}/>
                    </div>
                  ))}
                </div>
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
