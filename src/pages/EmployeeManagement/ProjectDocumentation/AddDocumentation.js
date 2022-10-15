import { Button, Form, useEffect, useState } from "react";
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

const AddEmployeeForm = () => {
  const { id } = useParams();
  console.log(id);

  const Add = async (id, documentationTitle, documentationDescription) => {
    const result = await axios.post(
      `http://localhost:5000/api/documentation/addDocumentation?projectId=${id}`,
      {
        documentationTitle: documentationTitle,
      },
      { documentationDescription: documentationDescription }
    );

    if (result.status == 200) {
      NotificationManager.success("Inserted successfully !");
    } else {
      NotificationManager.error("Insertion failed !");
    }
  };

  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Add Documentation
            </h5>
            <form style={{ marginTop: "1.5rem" }}>
              <input
                type="text"
                id="documentationTitle"
                name="documentationTitle"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Title"
              />
              <textarea
                type="textarea"
                id="documentationDescription"
                name="documentationDescription"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Description"
              />
              <button
                type="submit"
                class="btn btn-dark"
                style={{ padding: "5px 40px", marginLeft: "10rem" }}
                onClick={() => {
                  const documentationTitle =
                    document.getElementById("documentationTitle","documentationDescription").value;

                    // const documentationDescription =
                    // document.getElementById("documentationDescription").value;

                  if (documentationTitle == "") {
                    console.log("No content");
                    NotificationManager.warning("Please enter your Title of ");
                  } else {
                    Add(id, documentationTitle);
                  }
                }}
              >
                ADD
              </button>
              {/* <Button className="mr-2" htmlType="button" onClick={onReset}>
                Reset
              </Button> */}
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
