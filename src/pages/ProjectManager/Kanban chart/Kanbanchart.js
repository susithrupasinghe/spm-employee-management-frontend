import axios from "axios";
import { useEffect, useState } from "react";
import { GrFormAdd, AiOutlineMore, AiOutlineEdit } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "right" }}
    ></div>
  );
};

const Chart = () => {
  const [modal, setModal] = useState(false);

  const toggle = (props) => setModal(!modal);

  const [dotoissueList, setIssueList] = useState();
  const [inprogressissueList, setInprogressIssueList] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const id = window.location.pathname.split("/")[1];
  console.log(id);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3001/api/issue/issueTodo/6174c1868706230016a66ab2"
      );
      setIssueList(result.data);
      console.log(result.data);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const result = await axios.get(
  //     "http://localhost:5000/api/issue/issueTodo/6174c1868706230016a66ab2"
  //   );
  //   setInprogressIssueList(result.data);
  //   console.log(result.data);
  //   setIsLoaded(true);
  // };
  // fetchData();

  console.log(dotoissueList);

  const hadleHours = (e) => {
    e.preventDefault();
    const data = {
      issueName: dotoissueList.issueName,
      description: dotoissueList.description,
      points: dotoissueList.points,
      assignee: dotoissueList.assignee,
      progress: dotoissueList.progress,
      estimatedTime: parseInt(hours) + parseInt(dotoissueList.estimatedTime),
    };

    const result = axios.put(`http://localhost:3001/api/issue/${id}`, data);
    if (result) {
      console.log(result);
    }
  };

  if (isLoaded) {
    return (
      <div class="card" style={{ borderRadius: "10px" }}>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Implement the login ui</ModalHeader>
          <ModalBody>
            <p>
              All online experiences should end in action, and landing pages are
              the moment the excitement your campaign generated crystallizes
              into a leap of faith. From simple ‘buy now’ buttons to more
              complex experiences, landing pages represent a commitment or
              decision from the visitor.{" "}
            </p>
            <div>
              <span style={{ color: "#A80038" }}>Status - </span>
              <span style={{ color: "#A80038" }}>To do</span>
            </div>
            <div>
              <span style={{ color: "#A80038" }}>Assignee - </span>
              <span style={{ color: "#A80038" }}>Susith Rupasinghe</span>
            </div>
            <div>
              <span style={{ color: "#A80038" }}>Estimated Date - </span>
              <span style={{ color: "#A80038" }}>2 days</span>
            </div>

            <div>
              <span style={{ color: "#A80038" }}>Current logged time - </span>
              <span style={{ color: "#A80038" }}>1 day</span>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <form onSubmit={hadleHours}>
              <div class="form-group">
                <input
                  required
                  type="num"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Add Hours"
                />
              </div>{" "}
            </form> */}
            {/* <Button class="btn btn-dark" onClick={toggle}>
              Add to time log
            </Button> */}
          </ModalFooter>
        </Modal>
        <div class="card" style={{ borderRadius: "10px" }}></div>
        <div class="row">
          <div class="col">
            <div class="card-body">
              <div style={{ display: "flex" }}>
                <FaCircle size={40} style={{ color: "red" }} />
                <h5
                  class="card-title"
                  style={{
                    fontWeight: "bold",
                    marginLeft: "1rem",
                    fontSize: "2rem",
                  }}
                >
                  To do
                </h5>
              </div>

              <div>
                {dotoissueList.Issue.map((dotoList) => (
                  <div class="col-sm-13" style={{ marginTop: "1rem" }}>
                    <div class="card">
                      <div class="card-body">
                        <div class="col" style={{ marginTop: "1rem" }}>
                          <div>
                            <div class="card">
                              <div class="card-body">
                                <h5
                                  class="card-title"
                                  style={{ color: "#A80038" }}
                                >
                                  {dotoList.description}
                                </h5>
                                <hr />
                                <span
                                  style={{
                                    float: "right",
                                    color: "#FD0054",
                                  }}
                                  onClick={toggle}
                                >
                                  Opened By
                                </span>
                              </div>
                            </div>
                          </div>
                          <a>
                            <GrFormAdd
                              size={25}
                              style={{
                                color: "#A80038",
                                marginRight: "100px",
                              }}
                              onClick={() => {}}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <div class="card" style={{ borderRadius: "10px" }}>
                <div class="card-body">
                  <div style={{ display: "flex" }}>
                    <FaCircle size={40} style={{ color: "orange" }} />
                    <h5
                      class="card-title"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "1rem",
                        fontSize: "2rem",
                      }}
                    >
                      In Progress
                    </h5>
                  </div>
                  <div>
                    <div class="col" style={{ marginTop: "1rem" }}>
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title" style={{ color: "#A80038" }}>
                            {/* {inprogressissueList.issueName} */}
                          </h5>
                          <hr />
                          <span style={{ float: "right", color: "#FD0054" }}>
                            Opened By
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <div class="card" style={{ borderRadius: "10px" }}>
                <div class="card-body">
                  <div style={{ display: "flex" }}>
                    <FaCircle size={40} style={{ color: "green" }} />
                    <h5
                      class="card-title"
                      style={{
                        fontWeight: "bold",
                        marginLeft: "1rem",
                        fontSize: "2rem",
                      }}
                    >
                      Done
                    </h5>
                  </div>
                  <div>
                    <div class="col-sm-13" style={{ marginTop: "1rem" }}>
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title" style={{ color: "#A80038" }}>
                            Landing Page UI/UX
                          </h5>
                          <hr />
                          <span style={{ float: "right", color: "#FD0054" }}>
                            Opened By
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const KanbanChart = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="col-lg-12">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanChart;
