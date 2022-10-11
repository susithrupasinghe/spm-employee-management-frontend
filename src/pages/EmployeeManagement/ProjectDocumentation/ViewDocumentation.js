import { useEffect, useState } from "react";
import axios from "axios";

const ViewEmployeeForm = () => {
    const [table, setTable] = useState("");
  
    return (
      <div class="row" style={{ marginLeft: "20rem" }}>
        <div class="col-sm-8">
          <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
            <div class="card-body">
              <h5 class="card-title" style={{ marginLeft: "13rem", fontFamily:"Inter" }}>
              Project Documentation
              </h5>
              <form  style={{ marginTop: "1.5rem" }}>
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

const ViewDocumentation = () => {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ViewEmployeeForm />
            </div>
            <div className="col-lg-12">
              {/* <Header /> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ViewDocumentation;