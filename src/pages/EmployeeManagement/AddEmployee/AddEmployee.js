import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete, } from "react-icons/ai";
import "jspdf-autotable";
import jsPDF from "jspdf";



const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontFamily: "Inter", fontSize: "20px", color: "grey" }}
    >
    </div>
  );
};

const Delete = async (id) =>{
  try {
    const res = await axios.delete(
      `http://localhost:5000/api/employee/${id}`,
    );
    console.log(res);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

const Add = async (event) =>{
    event.preventDefault();
    const name =event.target.name.value;
    const email =event.target.email.value;
    const password =event.target.password.value;
    const role =event.target.role.value;
    const department =event.target.department.value;
    const mobileNumber =event.target.mobileNumber.value;
    const rate =event.target.rate.value;
    console.log(role)
   const data ={
    name:name,
    username:name,
    email:email, 
    password:password, 
    mobileNumber:mobileNumber, 
    department:department, 
    rate:rate,
    role:role, 
   };

   try {
    const res = await axios.post(
      `http://localhost:5000/api/employee/register`,
      data
    );
    console.log(res);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
  
};

const EmployeeTable =() =>{
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:5000/api/employee/all"
      );
      setEmployee(result.data);
      setLoading(false);
      console.log(result.data.username);
    };
    fetchData();
  }, []);

  const columns = [
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Department", field: "department" },
    { title: "mobile number", field: "mobileNumber" },
  ];
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text(`Employee Report`, 30, 10);
      doc.autoTable({
          columns: columns.map((col) => ({
              ...col,
              dataKey: col.field,
          })),
          body: employee,
      });
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 70);
      doc.text(`Time: ${new Date().toLocaleTimeString()}`, 10, 80);
    doc.save(` Employee Report.pdf`);
  };

  if (loading) {
    return (
      <>
        <p>Data Loading</p>
      </>
    );
  }else {
    return (
      <div>
                      <table class="table">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>

                        {/* </table> */}
                        {employee.map((employee) => (
                          <tbody>
                            <tr>
                              <td >{employee.username}</td>
                              <td >{employee.email}</td>
                              <td >{employee.department}</td>
                              <td>
                                <div>
                                <a>
                                <AiOutlineDelete
                                  size={25}
                                  style={{
                                    color: "#A80038",
                                    marginRight: "20px",
                                  }}
                                  onClick={() => {
                                    Delete(employee._id);
                                  }}
                                />
                                </a>
                                </div>

                                
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                      <div>
                        <button onClick={generatePDF} type="button" class="btn btn-dark" style={{float: "right", padding:"5px 30px"}}>Generate</button>
                      </div>
                    </div>
                    
    )
  } 
};
const AddEmployeeForm = () => {
  



  return (
    <div class="row">
      <div class="col-sm-4">
        <div class="card" style={{ borderRadius: "15px" }}>
          <div class="card-body">
            <h5 class="card-title">Add Employee</h5>
            <form onSubmit={Add} style={{ marginTop: "1.5rem" }}>
              <input
                type="text"
                name="name"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Employee Name"
              />
              <input
                type="email"
                name="email"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Password"
              />
              <input
                type="password"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Confirm Password"
              />
              <select
                id="role"
                name="role"
                style={{ marginBottom: "1rem" }}
                class="form-control">
                  <option value="employee">Employee</option>
                  <option value="pm">Project Manager</option>
                  <option selected disabled>Add Role</option>
              </select>
              <select
                id="department"
                name="department"
                style={{ marginBottom: "1rem" }}
                class="form-control">
                  <option value="accounting">Accounting</option>
                  <option value="marketing">Marketing</option>
                  <option value="development">Development</option>
                  <option value="testing">Testing</option>
                  <option selected disabled>Select department</option>
              </select>
              <input
                type="text"
                name="mobileNumber"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Mobile Number"
              />
              <input
                type="text"
                name="rate"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Rate"
              />
              <button
                type="submit"
                class="btn btn-dark"
                style={{ padding: "5px 40px" }}
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px" }}>
          <div class="card-body">
            <EmployeeTable/>
        </div>
      </div>
    </div>
    </div>
  );
};

const AddEmployee = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: "1.5rem" }}>
            <Header />
          </div>
          <div className="col-lg-12">
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
