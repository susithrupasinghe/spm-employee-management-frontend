import { FaCircle } from 'react-icons/fa';
import { AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosRemoveCircle } from 'react-icons/io';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import moment from "moment";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import jsPDF from 'jspdf';
import "jspdf-autotable";

import "react-datepicker/dist/react-datepicker.css";



const addSprint = async (id, fromdate, todate) => {


  const result = await axios.put(`http://localhost:3001/api/project/addsprint/${id}`, {
    fromDate: fromdate,
    toDate: todate
  });

  if (result.status == 200) {

    NotificationManager.success('Sprint created successfully !');
  }
  else {
    NotificationManager.error('Sprint creation failed !');
  }
}

const Header = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(new Date());



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
      <Modal isOpen={modal} toggle={toggle} style={{ maxWidth: '600px', width: '100%' }}>
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
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  minDate={moment().toDate()}
                  startDate={startDate}
                  endDate={endDate}

                />
              </div>
              <div className='col-6'>
                <DatePicker
                  open={true}
                  inline
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  minDate={startDate}
                />
              </div>
            </div>
          </div>

        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-dark" onClick={()=> {
            addSprint(props.id, startDate, endDate);
            setTimeout(function () {
              toggle();
            }, 2000);
            
          }}>
            Add
          </Button>{' '}

        </ModalFooter>
      </Modal>
      <NotificationContainer />
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Sprint
      </span>
      <div>
        {/* <button
          type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px" }}
          onClick={generatePDF}
        >
          Report
        </button> */}
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


const addFeedback = async (id, feedback) => {

  console.log(feedback);


  const result = await axios.put(`http://localhost:3001/api/sprint/addFeedback/${id}`, {
    feedback: feedback
  });

  if (result.status == 200) {

    NotificationManager.success('Feedback inserted successfully !');
  }
  else {
    NotificationManager.error('Feedback insertion failed !');
  }
}

const SprintCard = (props) => {
  const [modalFeedback, setModalFeedback] = useState(false);


  const toggleFeedback = () => setModalFeedback(!modalFeedback);
  return (
    <div class="card" style={{ borderRadius: "10px" }}>
      <Modal isOpen={modalFeedback} toggle={toggleFeedback} style={{ maxWidth: '600px', width: '100%' }}>
        <ModalHeader toggle={toggleFeedback}>Add Feedback</ModalHeader>
        <ModalBody>
          <form className='px-3'>
            <label>Add Feedback</label>
            <textarea class="form-control" rows="6" id='feedback'></textarea>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button class="btn btn-dark" onClick={() => {

            const data = document.getElementById('feedback').value;

            if (data == '') {
              console.log("No content")
              NotificationManager.warning('Please enter your feedback');
            }
            else {
              addFeedback(props.id, data);
              toggleFeedback();

            }

          }}>
            Add
          </Button>{' '}
          
        </ModalFooter>
      </Modal>
      <NotificationContainer />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="card-body">
          <h3 style={{ fontWeight: "bold" }}>Sprint {props.count}</h3>
          <span style={{ color: "gray" }}>
            {props.start != null && props.start != undefined ? moment(props.start).utc().format('YYYY-MM-DD') : ''} -
            {props.end != null && props.end != undefined ? moment(props.end).utc().format('YYYY-MM-DD') : ''}
          </span>
        </div>
        {props.isPrev != null || props.isPrev == undefined &&

          <div style={{ marginRight: "1rem", marginTop: "1rem" }}>
            <button
              type="button"
              class="btn btn-dark"
              style={{ padding: "8px 25px" }}
              onClick={toggleFeedback}
            >
              Add Feedback
            </button>
            <Link
              to={`/${props.id}/issues`}
              state={{ project_id: props.project_id }}
              type="button"
              class="btn btn-dark"
              style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
            >
              Add Task
            </Link>
            {/* <button>Report</button> */}
          </div>
        }

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
console.log(todoListLast);
    inProgressListLast = inProgressListLast.map((item) => {
      item.progress = "inprogress"
      return item;
    })

    doneListLast = doneListLast.map((item) => {
      item.progress = "done"
      return item;
    })



    const TaskListLast = [...todoListLast, ...inProgressListLast, ...doneListLast];
  

    const columns = [
      {title: "Task Name", field: "issueName"},
      {title: "Assignee", field: "assignee"},
      {title: "Estimated Date", field: "estimatedTime"},
      {title: "story points", field: "points"},
      
    ]

    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text("Sprint report", 30, 10);
      doc.autoTable({
        columns: columns.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: TaskListLast,
      });
      doc.save("Sprint report.pdf");
    }


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

  console.log(TaskListLast);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Header count={sprintCount}  id={id}/>
              <button type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px" , float: 'right'}}onClick={generatePDF}>report</button>
            </div>
            {
              sprintCount >= 1 && TaskListPrev != null ?
                <>
                  <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                    <SprintCard tasks={TaskListLast} start={fromDateLast} end={toDateLast} count={sprintCount} id={project.sprintList[0]._id} project_id={id} />
                  </div>
                  <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
                    <SprintCard tasks={TaskListPrev} isPrev={true} count={sprintCount-1} />
                  </div>
                </>
                :
                <>
                  <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                    <SprintCard tasks={TaskListLast} start={fromDateLast} end={toDateLast} count={sprintCount} id={project.sprintList[0]._id} project_id={id}/>
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
              <Header count={0} id={id}/>
            </div>
            {/* <div className="col-lg-12" style={{ marginTop: "2rem" }}>
              <SprintCard />
            </div>
            <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
              <SprintCard />
            </div> */}
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
