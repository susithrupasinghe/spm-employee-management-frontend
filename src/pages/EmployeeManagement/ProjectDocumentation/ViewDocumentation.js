import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMore, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
// import { Modal } from "antd";
import "./ViewDocumentation.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button, Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";

// const queryParams = new URLSearchParams(window.location.search);
// const projectId = queryParams.get("id");

// console.log(projectId);

const { confirm } = Modal;

const ViewEmployeeDocument = () => {
  // const state = { visible: false };

  const { id } = useParams();
  // console.log(id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [documents, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:5000/api/documentation/readDocmentationByProject?id=${id}`
      );
      setProjects(result);
      setLoading(false);
      // console.log(result);
    };
    fetchData();
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // const readDocument = (docDescrition) => {
  //   // console.log(docDescrition);
  //   return (
  //     <div class="list-group" id="list-tab" role="tablist">
  //       <a
  //         class="list-group-item list-group-item-action"
  //         id=""
  //         data-toggle="list"
  //         // href="#list-home"
  //         role="tab"
  //         aria-controls="home"
  //         onClick={() => {
  //           // readDocument(document.documentationDescription);
  //         }}
  //       >
  //         {/* {document.documentationTitle} */}
  //       </a>
  //     </div>
  //   );
  // };

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
        <div class="col-sm-4">
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
              class="btn pluss"
              title="Add Document"
              style={{ marginLeft: "15rem", marginBottom: "2rem" }}
              onClick={() => {
                navigateAddDocumentation(id);
              }}
            >
              Add Documentation
            </Button>
            {/* <h5 style={{ marginLeft: "1rem" }}>Documentations</h5> */}
          </a>
          {/* </Tooltip> */}

          <div class="row">
            <div class="card" style={{ borderRadius: "15px" }}>
              <div class="card-body">
                <div class="col-10">
                  <div class="row">
                    <div>
                      <table class="table">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">Documentation Name</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>

                        {/* </table> */}
                        {documents.data.Document.map((document) => (
                          <tbody>
                            <tr>
                              <td scope="row">{document.documentationTitle}</td>

                              <td>
                                <div>
                                  <AiOutlineMore
                                    size={25}
                                    style={{
                                      color: "#A80038",
                                      marginRight: "20px",
                                    }}
                                    onClick={() => {}}
                                  />
                                  <a>
                                    <AiOutlineEdit
                                      size={25}
                                      style={{
                                        color: "#A80038",
                                        marginRight: "20px",
                                      }}
                                      onClick={() => {
                                        navigateUpdateDocumentation(
                                          document._id
                                        );
                                      }}
                                    />
                                  </a>
                                </div>

                                {/* <AiOutlineDelete
                                  size={25}
                                  style={{
                                    color: "#A80038",
                                    marginRight: "20px",
                                  }}
                                  onClick={() => {
                                    deleteDocument(document._id);
                                  }}
                                /> */}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>

                <div class="col-8"></div>
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
    <div>
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
