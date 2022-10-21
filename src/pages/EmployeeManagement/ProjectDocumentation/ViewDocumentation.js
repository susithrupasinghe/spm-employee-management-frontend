import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMore, AiOutlineEdit } from "react-icons/ai";
import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useParams } from "react-router-dom";
import "./ViewDocumentation.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button, Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DeletePopUp = async (id) => {
  if (window.confirm("Are you sure")) {
    const result = await axios.delete(
      `http://localhost:3001/api/documentation/deleteDoc?id=${id}`
    );
    if (result) {
      alert("Delete Documentation");
      window.location.reload();
    }
  } else {
  }
};

const ViewEmployeeDocument = () => {
  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
  const toggle = (props) => setModal(!modal);
  // const state = { visible: false };

  const { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [documents, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3001/api/documentation/readDocmentationByProject?id=${id}`
      );
      setProjects(result);
      setLoading(false);
      // console.log(result);
    };
    fetchData();
  }, []);

  const columns = [
    {title: "Documentation Name", field: "documentationTitle"},
    {title: "Documentation Description", field: "documentationDescription"}
  ];

  // console.log(documents.data.Document);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Documentation report", 30, 10);
    doc.autoTable({
      columns: columns.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: documents.data.Document
    });
    doc.save();
  }


  // const columns = [
  //   {title: "Documentation Name", field: ""},
  //   {title: "Documentation Description", field: ""}
  // ];

  // // console.log(documents.data.Document);

  // const generatePDF = () => {
  //   const doc = new jsPDF();
  //   doc.text("Documentation report");
  //   doc.autoTable({
  //     columns: columns.map((col) => ({
  //       ...col,
  //       dataKey: col.field,
  //     })),
  //     body: documents.data.Document
  //   });
  //   doc.save();
  // }


  const navigate = useNavigate();

  const navigateAddDocumentation = (id) => {
    navigate(`/project/addDocumentation/${id}`, {
      state: {},
    });
  };

  const navigateUpdateDocumentation = (id) => {
    navigate(`/project/updateDocumentation/${id}`, {
      state: {},
    });
  };

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
        <div class="col">
          <h3
            class="card-title"
            style={{
              marginLeft: "1rem",
              marginTop: "5rem",
              marginBottom: "2rem",
            }}
          >
            Project Documentation
          </h3>
          {/* <Tooltip title="Add Documentation"> */}
          <a>
            <Button
              className="btn pluss"
              title="Add Document"
              style={{ marginLeft: "1rem", marginBottom: "2rem" }}
              onClick={() => {
                navigateAddDocumentation(id);
              }}
            >
              Add Documentation
            </Button>
            <Button 
            style={{ marginLeft: "1rem", marginBottom: "2rem" }}
            onClick={generatePDF}>Report</Button>
            {/* <h5 style={{ marginLeft: "1rem" }}>Documentations</h5> */}
          </a>
          {/* </Tooltip> */}

          <div class="row">
          
            <div class="card" style={{ borderRadius: "15px" }}>
              <div class="card-body">
                <div class="row">
                  <div>
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Documentation Name</th>
                          <th scope="col">Documentation Description</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>

                      {/* </table> */}
                      {documents.data.Document.map((document) => (
                        <tbody>
                          <tr>
                            <td scope="row">{document.documentationTitle}</td>
                            <td scope="row">
                              {document.documentationDescription}
                            </td>
                            <td>
                              <div>
                               
                                <a>
                                  <AiOutlineEdit
                                    size={25}
                                    style={{
                                      color: "#A80038",
                                      marginRight: "20px",
                                    }}
                                    onClick={() => {
                                      navigateUpdateDocumentation(document._id);
                                    }}
                                  />
                                </a>
                                <a>
                                  <AiOutlineDelete
                                    size={25}
                                    style={{
                                      color: "#A80038",
                                      marginRight: "20px",
                                    }}
                                    onClick={() => {
                                      DeletePopUp(document._id);
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const ViewDocumentation = () => {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ViewEmployeeDocument />
          </div>
          <div className="col-lg-12">{/* <Header /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentation;
