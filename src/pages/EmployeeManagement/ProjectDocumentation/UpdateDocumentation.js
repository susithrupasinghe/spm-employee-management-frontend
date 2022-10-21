import React from "react";
import { useEffect, useState } from "react";
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

const Update = async (id, title, des) => {
    console.log(id);
    console.log(title);
    console.log(des)
    const result = await axios.put(
      `http://localhost:3001/api/documentation/updateDetails?id=${id}`,

      {
        documentationTitle: title,
        documentationDescription: des
      }
      
    );

    console.log(result)

    if (result.status == 200) {
      NotificationManager.success("Updated successfully !");
      setTimeout(()=>{}, 2000);
    window.location = "/project/viewDocumentation/6174c1868706230016a66ab2";
    //   window.locatio;
    } else {
      NotificationManager.error("Updated failed !");
    }
  };

const UpdateEmployeeForm = () => {
 const { id } = useParams();
//   console.log(id);



  const [table, setTable] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [updatedocuments, setProjects] = useState();

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:3001/api/documentation/readDocmentationDescription?id=${id}`
    );
    setProjects(result.data.DocumentDes[0]);
    setLoading(false);
  console.log(result);
  };
  useEffect(() => {

    fetchData();
  }, []);

 
  
//   console.log(updatedocuments.data.DocumentDes)
if(!loading){
  return (
    <div class="row" style={{ marginLeft: "20rem" }}>
      <div class="col-sm-8">
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <h5 class="card-title" style={{ marginLeft: "13rem" }}>
              Edit Documentation
            </h5>
            <NotificationContainer></NotificationContainer>
            <form style={{ marginTop: "1.5rem" }}>
              <input
                defaultValue={updatedocuments.documentationTitle}
                type="text"
                name="documentationTitle"
                id = "documentationTitle"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Title"
              />
              <textarea
                defaultValue={updatedocuments.documentationDescription}
                type="textarea"
                name="documentationDescription"
                id="documentationDescription"
                style={{ marginBottom: "1rem" }}
                class="form-control"
                placeholder="Document Description"
              />
              <Button
                
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
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
}

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
