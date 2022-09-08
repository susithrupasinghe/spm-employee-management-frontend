import { AiOutlineSearch } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontFamily: "Inter", fontSize: "20px", color: "grey" }}
    >
      <div style={{ float: "right" }}>
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
      </div>
    </div>
  );
};

const AddEmployeeForm = () => {
  return (
    <div class="row">
      <div class="col-sm-4">
        <div class="card" style={{ borderRadius: "15px" }}>
          <div class="card-body">
            <h5 class="card-title">Add Employee</h5>
            <form style={{ marginTop: "1.5rem" }}>
              <input
                type="text"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Employee Name"
              />
              <input
                type="email"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Email"
              />
              <input
                type="password"
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
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Add Role"
              />
              <input
                type="text"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Department"
              />
              <input
                type="text"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Mobile Number"
              />
              <input
                type="text"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Rate"
              />
              <button
                type="button"
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
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <MdDelete size={25} style={{ color: "#A80038" }} />
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <MdDelete size={25} style={{ color: "#A80038" }} />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" class="btn btn-dark" style={{float: "right", padding:"5px 30px"}}>Generate</button>
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
