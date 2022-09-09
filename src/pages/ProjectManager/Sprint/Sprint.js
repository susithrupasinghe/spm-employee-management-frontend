import { FaCircle } from 'react-icons/fa';
import { AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosRemoveCircle } from 'react-icons/io';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Header = (props) => {

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
      <Modal isOpen={modal} toggle={toggle}  style={{maxWidth: '600px', width: '100%'}}>
        <ModalHeader toggle={toggle}>Create Sprint</ModalHeader>
        <ModalBody>
      
        <h4>Sprint {props.count + 1}</h4>
          <div class="container">
          <div class="row">
          <br />
          <div className='col-6'>
          <span>From</span>
          </div>
          <div className='col-6'>
          <span>To</span>
          </div>
          
            </div>

          <div class="row">
            <div className='col-6'>
              <DatePicker
                open={true}
                inline
              />
            </div>
            <div className='col-6'>
              <DatePicker
                open={true}
                inline
              />
            </div>
            </div>
          </div>

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




const SprintCard = (props) => {
  const [modalFeedback, setModalFeedback] = useState(false);


  const toggleFeedback = () => setModalFeedback(!modalFeedback);
  return (
    <div class="card" style={{ borderRadius: "10px" }}>
      <Modal isOpen={modalFeedback} toggle={toggleFeedback}>
        <ModalHeader toggle={toggleFeedback}>Add Feedback</ModalHeader>
        <ModalBody>
          <form>
            <label>Add Feedback</label>
            <textarea class="form-control" rows="3"></textarea>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-dark" onClick={toggleFeedback}>
            Add
          </Button>{' '}

        </ModalFooter>
      </Modal>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="card-body">
          <h3 style={{ fontWeight: "bold" }}>Sprint {props.count}</h3>
          <span style={{ color: "gray" }}>
            {props.start != null && props.start != undefined ? moment(props.start).utc().format('YYYY-MM-DD') : 'Data unavailable'} -
            {props.end != null && props.end != undefined ? moment(props.end).utc().format('YYYY-MM-DD') : 'Data unavailable'}
          </span>
        </div>
        <div style={{ marginRight: "1rem", marginTop: "1rem" }}>
          <button
            type="button"
            class="btn btn-dark"
            style={{ padding: "8px 25px" }}
            onClick={toggleFeedback}
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
      <div style={{ padding: "0 2rem" }}>
        <table class="table">

          <tbody>
            {
              props.tasks.map((task) => {

                return (
                  <tr>
                    <td scope="row">
                      {
                        task.progress == "todo" && <FaCircle style={{ color: "red" }} />
                      }
                      {
                        task.progress == "inprogress" && <FaCircle style={{ color: "yellow" }} />
                      }
                      {
                        task.progress == "done" && <FaCircle style={{ color: "green" }} />
                      }

                    </td>
                    <td>{task.issueName}</td>
                    <td>{task.assignee == null ? 'Not Assigned ' : task.assignee.name}</td>
                    <td>{task.estimatedTime} Days</td>
                    <td>{task.points}</td>
                    <td>
                      <div>
                        <AiFillSetting size={25} style={{ color: "#A80038", marginRight: "20px" }} />
                        <IoIosRemoveCircle size={25} style={{ color: "#A80038" }} />
                      </div>
                    </td>
                  </tr>
                )

              })
            }
            {/* <tr>
              <th scope="row"><FaCircle style={{ color: "red" }} /></th>
              <td>Task1</td>
              <td>Worker1</td>
              <td>3 days</td>
              <td>5 points</td>
              <td>
                <div>
                  <AiFillSetting size={25} style={{ color: "#A80038", marginRight: "20px" }} />
                  <IoIosRemoveCircle size={25} style={{ color: "#A80038" }} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><FaCircle style={{ color: "red" }} /></th>
              <td>Task1</td>
              <td>Worker1</td>
              <td>3 days</td>
              <td>5 points</td>
              <td>
                <div>
                  <AiFillSetting size={25} style={{ color: "#A80038", marginRight: "20px" }} />
                  <IoIosRemoveCircle size={25} style={{ color: "#A80038" }} />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"><FaCircle style={{ color: "red" }} /></th>
              <td>Task1</td>
              <td>Worker1</td>
              <td>3 days</td>
              <td>5 points</td>
              <td>
                <div>
                  <AiFillSetting size={25} style={{ color: "#A80038", marginRight: "20px" }} />
                  <IoIosRemoveCircle size={25} style={{ color: "#A80038" }} />
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>


      </div>
    </div>
  );
};

const Sprint = () => {

  const { id } = useParams()

  const [project, setProjects] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3001/api/project/${id}`);
      setProjects(result.data);
      setIsLoaded(true);
    }
    fetchData();

  }, []);


  if (isloaded) {

    const sprintCount = project.sprintList.length;
    console.log(project);

    // Last Sprint 


    let todoListLast = sprintCount > 0 && project.sprintList[0] ? project.sprintList[0].toDoList : null;
    let inProgressListLast = sprintCount > 0 && project.sprintList[0] ? project.sprintList[0].inProgressList : null;
    let doneListLast = sprintCount > 0 && project.sprintList[0] ? project.sprintList[0].doneList : null;
    let fromDateLast = sprintCount > 0 && project.sprintList[0] ? project.sprintList[0].fromDate : null;
    let toDateLast = sprintCount > 0 && project.sprintList[0] ? project.sprintList[0].toDate : null;

    todoListLast = todoListLast.map((item) => {
      item.progress = "todo"
      return item;
    })

    inProgressListLast = inProgressListLast.map((item) => {
      item.progress = "inprogress"
      return item;
    })

    doneListLast = doneListLast.map((item) => {
      item.progress = "done"
      return item;
    })

    const TaskListLast = [...todoListLast, ...inProgressListLast, ...doneListLast];


    // Previous Sprint

    let TaskListPrev;

    if (sprintCount > 1) {

      let todoListPrev = sprintCount > 1 && project.sprintList[1] ? project.sprintList[1].toDoList : null;
      let inProgressListPrev = sprintCount > 1 && project.sprintList[1] ? project.sprintList[1].inProgressList : null;
      let doneListPrev = sprintCount > 1 && project.sprintList[1] ? project.sprintList[1].doneList : null;

      todoListPrev = todoListPrev != null ? todoListPrev.map((item) => {
        item.progress = "todo"
        return item;
      }) : null

      inProgressListPrev = inProgressListPrev != null ? inProgressListPrev.map((item) => {
        item.progress = "inprogress"
        return item;
      }) : null

      doneListPrev = doneListPrev != null ? doneListPrev.map((item) => {
        item.progress = "done"
        return item;
      }) : null

      if (todoListPrev.length > 0 || inProgressListPrev > 0 || doneListPrev > 0) {
        TaskListPrev = [...todoListPrev, ...inProgressListPrev, ...doneListPrev];
      }
      else {
        TaskListPrev = null;
      }

    }


    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header count={sprintCount}/>
            </div>
            {
              sprintCount >= 1 && TaskListPrev != null ?
                <>
                  <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                    <SprintCard tasks={TaskListLast} start={fromDateLast} end={toDateLast} count={sprintCount} />
                  </div>
                  <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
                    <SprintCard tasks={TaskListPrev} />
                  </div>
                </>
                :
                <>
                  <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                    <SprintCard tasks={TaskListLast} start={fromDateLast} end={toDateLast} count={sprintCount} />
                  </div>
                </>

            }

          </div>
        </div>
      </div>
    );


  }
  else {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header count={0} />
            </div>
            {/* <div className="col-lg-12" style={{ marginTop: "2rem" }}>
              <SprintCard />
            </div>
            <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
              <SprintCard />
            </div> */}
          </div>
        </div>
      </div>
    );

  }





};

export default Sprint;
