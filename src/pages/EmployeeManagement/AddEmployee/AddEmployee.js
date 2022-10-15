import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete, } from "react-icons/ai";
const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontFamily: "Inter", fontSize: "20px", color: "grey" }}
    >
      {/* <div style={{ float: "right" }}>
        <div class="input-group">
          <div class="form-outline">
            <input type="text" class="form-control" />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            style={{ height: "38px" }}
          >
            <i class="fas fa-search"></i>
            <AiOutlineSearch />
          </button>
        </div>
      </div> */}
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
  const [error, setError] = useState(false);
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

  if (loading) {
    return (
      <>
        <p>Data Loading</p>
      </>
    );
  } else if (error) {
    return (
      <>
        <p>Error: {error}</p>
      </>
    );
  } else {
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
              <input
                type="text"
                name="role"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Add Role"
              />
              <input
                type="text"
                name="department"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Department"
              />
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
            <div>
            <button type="button" class="btn btn-dark" style={{float: "right", padding:"5px 30px"}}>Generate</button>
          </div>
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
