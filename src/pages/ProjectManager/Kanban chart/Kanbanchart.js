import { useState } from "react";
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

    const toggle = () => setModal(!modal);
  return (
    <div class="card" style={{borderRadius: "10px"}}>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Landing Page UI/UX</ModalHeader>
        <ModalBody>
            <p>All online experiences should end in action, and landing pages are the moment the excitement your campaign generated crystallizes into a leap of faith. From simple ‘buy now’ buttons to more complex experiences, landing pages represent a commitment or decision from the visitor. </p>
            <div><span style={{color: "#A80038"}}>Status - </span><span style={{color: "#A80038"}}>To do</span></div>
            <div><span style={{color: "#A80038"}}>Assignee - </span><span style={{color: "#A80038"}}>Susith Rupasinghe</span></div>
            <div><span style={{color: "#A80038"}}>Estimated Date - </span><span style={{color: "#A80038"}}>2 days</span></div>
            <div><span style={{color: "#A80038"}}>Current logged time - </span><span style={{color: "#A80038"}}>1 day</span></div>

        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-secondary" onClick={toggle}>
            5h
          </Button>{' '}
          <Button class="btn btn-dark" onClick={toggle}>
            Add to time log
          </Button>
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
                  <div class="col-sm-13" style={{marginTop: "1rem", }}>
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
                  <div class="col-sm-13" style={{marginTop: "2rem"}}>
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
