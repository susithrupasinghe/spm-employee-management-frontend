import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "right" }}
    >
      {/* <span className="display-6" style={{fontWeight: "bold"}}>Welcome Susith</span> */}
    </div>
  );
};

const Add = async (event) => {
  event.preventDefault();
  const documentName = event.target.documentName.value;
  const documentDiscription = event.target.documentDiscription.value;

  const data = {};

  try {
    const res = await axios.post(
      `http://localhost:3000/api/employee/register`,
      data
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  //console.table(name,email,password,role,department,mobileNumber,rate)
};

const AddEmployeeForm = () => {
  const [table, setTable] = useState("");

  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Add Documentation
            </h5>
            <form onSubmit={Add} style={{ marginTop: "1.5rem" }}>
              <input
                type="text"
                name="documentName"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Title"
              />
              <textarea
                type="textarea"
                name="email"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Description"
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
    </div>
  );
};

const AddDocumentation = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <AddEmployeeForm />
          </div>
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocumentation;
