import {FaCircle} from 'react-icons/fa';
import {AiFillEdit, AiFillSetting} from 'react-icons/ai';
import {IoIosRemoveCircle} from 'react-icons/io';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
const Header = () => {
    
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
    
  return (
    
    <div
      className="text-center mt-5"
      style={{
        fontSize: "20px",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Sprint</ModalHeader>
        <ModalBody>
         <span>Sprint 3</span>
         <br/>
         <span>From</span>
        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-dark" onClick={toggle}>
            Add
          </Button>{' '}
          
        </ModalFooter>
      </Modal>
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Sprint
      </span>
      <div>
        <button
          type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px" }}
        >
          Report
        </button>
        <button
          type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
          onClick={toggle}
        >
          Create
        </button>
      </div>
    </div>
  );
};


  

const SprintCard = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <div class="card" style={{borderRadius: "10px"}}>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Feedback</ModalHeader>
        <ModalBody>
         <form>
            <label>Add Feedback</label>
            <textarea class="form-control" rows="3"></textarea>
         </form>
        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-dark" onClick={toggle}>
            Add
          </Button>{' '}
          
        </ModalFooter>
      </Modal>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="card-body">
          <h3 style={{ fontWeight: "bold" }}>Sprint 2</h3>
          <span style={{ color: "gray" }}>
            31/Jan/21 9.20 PM - 01/Feb/22 9.50 PM
          </span>
        </div>
        <div style={{ marginRight: "1rem", marginTop: "1rem" }}>
          <button
            type="button"
            class="btn btn-dark"
            style={{ padding: "8px 25px" }}
            onClick={toggle}
          >
            Add Feedback
          </button>
          <button
            type="button"
            class="btn btn-dark"
            style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
          >
            Add Task
          </button>
        </div>
      </div>
      <div style={{padding: "0 2rem"}}>
      <table class="table">
  
  <tbody>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
  </tbody>
</table>


      </div>
    </div>
  );
};

const Sprint = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="col-lg-12" style={{ marginTop: "2rem" }}>
            <SprintCard />
          </div>
          <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
            <SprintCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
