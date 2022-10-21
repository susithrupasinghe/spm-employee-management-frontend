import {  Form, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { Button } from "reactstrap";

const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "right" }}
    ></div>
  );
};

const Add = async (id, documentationTitle, documentationDescription) => {
  const result = await axios.post(
    `http://localhost:3001/api/documentation/addDocumentation?projectId=${id}`,
    {
      documentationTitle: documentationTitle,
      documentationDescription: documentationDescription
    }
  );

  if (result.status == 200) {
    NotificationManager.success("Inserted successfully !");
    setTimeout(()=>{}, 2000);
    window.location = "/project/viewDocumentation/6174c1868706230016a66ab2" ;
  } else {
    NotificationManager.error("Insertion failed !");
  }
};

const AddEmployeeForm = () => {
  const { id } = useParams();
  console.log(id);



  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Add Documentation
            </h5>
            <NotificationContainer></NotificationContainer>
            <form style={{ marginTop: "1.5rem" }} >
              <input
                type="text"
                id="documentationTitle"
                name="documentationTitle"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Title"
              required/>
              <textarea
                type="textarea"
                id="documentationDescription"
                name="documentationDescription"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Description"
              />
              <Button
              
                className="btn btn-dark"
                style={{ padding: "5px 40px", marginLeft: "10rem" }}
                onClick={() => {
                  const documentationTitle =
                    document.getElementById("documentationTitle").value;

                    const documentationDescription =
                    document.getElementById("documentationDescription").value;

                  if (documentationTitle == "") {
                    console.log("No content");
                    NotificationManager.warning("Please enter your Title of ");
                  } else {
                    Add(id, documentationTitle, documentationDescription);
                  }
                }}
              >
                ADD
              </Button>
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
