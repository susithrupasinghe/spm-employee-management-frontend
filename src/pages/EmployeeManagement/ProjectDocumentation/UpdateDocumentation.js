import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "right" }}
    ></div>
  );
};

const UpdateEmployeeForm = () => {
 const { id } = useParams();
  console.log(id);

  const [table, setTable] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedocuments, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "http://localhost:5000/api/documentation/updateDetails?id=62f52ca972746d66e817aca5"
//       );
//       setProjects(result);
//       setLoading(false);
//       console.log(result);
//     };
//     fetchData();
//   }, []);

  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Update Documentation
            </h5>
            <form style={{ marginTop: "1.5rem" }}>
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
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateDocumentation = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <UpdateEmployeeForm />
          </div>
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDocumentation;