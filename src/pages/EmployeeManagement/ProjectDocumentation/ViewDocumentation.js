import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineMore, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import "./ViewDocumentation.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button, Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";

const DeleteDocumentation = (props) => {
  // const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);

  // const [projectName, setProjectName] = useState("");
  // const [descripton, setDescription] = useState("");
  // const [projectManager, setProjectManager] = useState([]);
  // const [pmId, setPmId] = useState(null);

  // useEffect(() => {
  //   const fetchPMData = async () => {
  //     const result = await axios.get(
  //       "http://localhost:5000/api/projectmanager/all"
  //     );
  //     console.log("result : ", result.data);
  //     setProjectManager(result.data);
  //   };
  //   fetchPMData();
  // }, []);

  // const handleUpdate = async () => {
  //   console.log("ok");
  //   const data = {
  //     projectName: projectName,
  //     descripton: descripton,
  //     projectManager: pmId,
  //   };

  //   try {
  //     const res = await axios.put(
  //       `http://localhost:5000/api/project/${props.project._id}`,
  //       data
  //     );
  //     console.log(res);
  //   } catch (error) {}
  // };

  // return (
  //   <tr>
  //     <td>{props.project._id}</td>
  //     <td>{props.project.projectName}</td>
  //     <td>
  //       <AiFillEdit
  //         size={25}
  //         style={{ color: "#A80038", marginRight: "20px" }}
  //         onClick={toggle}
  //       />
  //       {/* <MdDelete size={25} style={{ color: "#A80038" }} /> */}
  //     </td>

  //     <Modal isOpen={modal} toggle={toggle}>
  //       <ModalHeader toggle={toggle}>Project Update</ModalHeader>
  //       <ModalBody>
  //         <form onSubmit={handleUpdate}>
  //           <div class="form-group">
  //             <label for="exampleFormControlInput1">Project Name</label>
  //             <input
  //               type="text"
  //               class="form-control"
  //               defaultValue={props.project.projectName}
  //               placeholder="Project Name"
  //               onChange={(e) => setProjectName(e.target.value)}
  //             />
  //           </div>
  //           <div class="form-group" style={{ marginTop: "1rem" }}>
  //             <label for="exampleFormControlTextarea1">Description</label>
  //             <textarea
  //               class="form-control"
  //               id="exampleFormControlTextarea1"
  //               rows="3"
  //               defaultValue={props.project.descripton}
  //               onChange={(e) => setDescription(e.target.value)}
  //             ></textarea>
  //           </div>
  //           <div class="form-group" style={{ marginTop: "1rem" }}>
  //             <label for="exampleFormControlSelect1">Project Manager</label>
  //             <select
  //               class="form-control"
  //               id="exampleFormControlSelect1"
  //               defaultValue={props.project.projectManager.name}
  //               onChange={(e) => {const data = e.target.value; setPmId(data)}}
  //             >
  //               <option selected>{props.project.projectManager.name}</option>
  //               {projectManager.map((pm) => (
  //                 <option value={pm._id}>{pm.name}</option>
  //               ))}
  //             </select>
  //           </div>
  //           <ModalFooter>
  //             <Button type="submit" class="btn btn-dark" onClick={toggle}>
  //               Update
  //             </Button>{" "}
  //             <Button class="btn btn-danger" onClick={toggle}>
  //               Cancel
  //             </Button>
  //           </ModalFooter>
  //         </form>
  //       </ModalBody>
  //     </Modal>
  //   </tr>
  // );
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
        `http://localhost:5000/api/documentation/readDocmentationByProject?id=${id}`
      );
      setProjects(result);
      setLoading(false);
      // console.log(result);
    };
    fetchData();
  }, []);

  

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

  // const deleteDocument = (id) => {
  //   navigate(`/project/updateDocumentation/${id}`, {
  //     state: {},
  //   });
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
                <div class="col-130">
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
                                  <a>
                                    <AiOutlineDelete
                                      size={25}
                                      style={{
                                        color: "#A80038",
                                        marginRight: "20px",
                                      }}
                                      onClick={() => {
                                        DeleteDocumentation(document._id);
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
