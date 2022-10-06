import axios from "axios";
import { useEffect, useState } from "react";
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

    const [issueList, setIssueList] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const id = window.location.pathname.split("/")[1];
    console.log(id);
    const [hours, setHours] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
      const result = await axios.get(`http://localhost:5000/api/issue/${id}`);
      setIssueList(result.data);
      console.log(result.data);
      setIsLoaded(true);
      };
      fetchData();
    },[]);

    const hadleHours = (e) => {
      e.preventDefault();
      const data = {
        issueName: issueList.issueName,
        description: issueList.description,
        points: issueList.points,
        assignee: issueList.assignee,
        progress: issueList.progress,
        estimatedTime: parseInt(hours) + parseInt(issueList.estimatedTime),
      }

      const result = axios.put(`http://localhost:5000/api/issue/${id}`, data);
      if (result) {
        console.log(result);
       
      }
    }

    console.log(issueList);

if (isLoaded) {

  return (

    <div class="card" style={{borderRadius: "10px"}}>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{}</ModalHeader>
        <ModalBody>
            <p>{issueList.description}</p>
            <div><span style={{color: "#A80038"}}>Status - </span><span style={{color: "#A80038"}}>{issueList.progress}</span></div>
            <div><span style={{color: "#A80038"}}>Assignee - </span><span style={{color: "#A80038"}}>Susith Rupasinghe</span></div>
            <div><span style={{color: "#A80038"}}>Estimated time - </span><span style={{color: "#A80038"}}>{issueList.estimatedTime} Hours</span></div>
            <div><span style={{color: "#A80038"}}>Current logged time - </span><span style={{color: "#A80038"}}>1 day</span></div>

        </ModalBody>
        <ModalFooter>
          <form onSubmit={hadleHours}>
          <div class="form-group">
    <input type="num" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setHours(e.target.value)} placeholder="Add Hours" />
  </div>
          {' '}
          <Button type="submit" class="btn btn-dark" onClick={toggle}>
            Add to time log
          </Button>
          </form>
        </ModalFooter>
      </Modal>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="card" style={{borderRadius: "10px"}}>
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
                  {/* {projects[9].sprintList[0].toDoList.map((item) => {
                    return (
                      <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                    )
                  })} */}
                <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Implementing the booking seats backend</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>

                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{borderRadius: "10px"}}>
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
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{borderRadius: "10px"}}>
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
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-sm-13" style={{marginTop: "1rem"}}>
                    <div class="card" onClick={toggle}>
                      <div class="card-body">
                        <h5 class="card-title" style={{color: "#A80038"}}>Landing Page UI/UX</h5>
                            <hr/>
                            <span style={{float: "right", color:"#FD0054"}}>Opened By</span>
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
                  }
                  else {
                    return (
                      <div></div>
                    )
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