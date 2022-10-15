import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";

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
//   console.log(id);

  const Update = async (id, documentationTitle, documentationDescription) => {
    console.log(id);
    console.log(documentationTitle);
    console.log(documentationDescription)
    const result = await axios.put(
      `http://localhost:5000/api/documentation/updateDetails?id=${id}`,
      {
        documentationTitle: documentationTitle,
        documentationDescription: documentationDescription
      }
      
    );

    if (result.status == 200) {
      NotificationManager.success("Inserted successfully !");
    } else {
      NotificationManager.error("Insertion failed !");
    }
  };

  const [table, setTable] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedocuments, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/documentation/readDocmentationDescription?id=${id}`
      );
      setProjects(result);
      setLoading(false);
    //   console.log(result);
    };
    fetchData();
  }, []);

 
  
//   console.log(updatedocuments.data.DocumentDes)
  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Edit Documentation
            </h5>
            <form style={{ marginTop: "1.5rem" }}>
              <input
                type="text"
                name="documentationTitle"
                id = "documentationTitle"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Title"
              />
              <textarea
                type="textarea"
                name="documentationDescription"
                id="documentationDescription"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Description"
              />
              <button
                type="submit"
                class="btn btn-dark"
                style={{ padding: "5px 40px" }}
                onClick={() => {
                    const documentationTitle =
                      document.getElementById("documentationTitle").value;
  
                      const documentationDescription =
                      document.getElementById("documentationDescription").value;
  
                    if (documentationTitle == "") {
                      console.log("No content");
                      NotificationManager.warning("Please enter your Title ");
                    } else {
                        Update(id,documentationTitle,documentationDescription);
                    }
                  }}
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
