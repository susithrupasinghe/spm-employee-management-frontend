import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FaCircle } from "react-icons/fa";
import { AiFillSetting, AiFillEdit } from "react-icons/ai";
import { IoIosRemoveCircle } from "react-icons/io";

function Header() {
    const [modalCreateIssue, setModalCreateIssue] = useState(false);

    const toggleCreateIssue = () => setModalCreateIssue(!modalCreateIssue);

    const [formData, setFormData] = useState({});

    const { id } = useParams();

    const location = useLocation();
    const { project_id } = location.state;

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        formData.project_id = project_id;

        try{
            let result = await axios.put(`http://localhost:3001/api/sprint/createissue/${id}`, formData);
            toggleCreateIssue();
            window.location.reload();
        }catch(e){
            console.error(e);
        }
    }

    return (
        <div className="d-flex mt-5">
            <div class="card" style={{ borderRadius: "10px" }}>
                <Modal isOpen={modalCreateIssue} toggle={toggleCreateIssue} style={{ maxWidth: '600px', width: '100%' }}>
                    <ModalHeader toggle={toggleCreateIssue}>Create Issue</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit} className='px-3'>
                            <label>Issue Name</label>
                            <input type="text" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, issueName: e.target.value }
                                })
                            }} value={formData.issueName} className="form-control mb-2" id='feedback'></input>

                            <label>Estimated Date</label>
                            <input type="date" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, estimatedTime: e.target.value }
                                })
                            }}  className="form-control mb-2" id='feedback'></input>

                            <label>Description</label>
                            <textarea onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, description: e.target.value }
                                })
                            }} className="form-control mb-2"></textarea>

                            <label>Assignee</label><br></br>
                            <select onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, assignee: e.target.value }
                                })
                            }} className="form-select form-select-sm mb-2" aria-label=".form-select-sm example">
                                <option selected>Select</option>
                                <option value="631b186639d97a765049abaf">MeemanageRavindu</option>
                            </select>

                            <label>Points</label><br></br>
                            <input type="number" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, points: e.target.value }
                                })
                            }} className="form-control mb-3" />

                            <input type="submit" className="btn btn-dark mb-2" value="Create" />
                        </form>
                    </ModalBody>
                </Modal>
            </div>
            <span className="display-6" style={{ fontWeight: "bold" }}>
                Issue list
            </span>
            <div className="flex-grow-1"></div>
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
                    onClick={toggleCreateIssue}
                    style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

const EditIssue = ({ modalEditIssue, setModalEditIssue, currentIssue }) => {
    const toggleEditIssue = () => setModalEditIssue(!modalEditIssue);

    const [formData, setFormData] = useState({});

    const { id } = useParams();

    const location = useLocation();
    const { project_id } = location.state;

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        formData.project_id = project_id;

        try{
            let result = await axios.patch(`http://localhost:3001/api/issue/${currentIssue}`, formData);
            toggleEditIssue();
            window.location.reload();
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        let fetchData = async () => {
            let result = await axios.get(`http://localhost:3001/api/issue/${currentIssue}`);
            console.log(result, "set");
            setFormData(result.data);
        }

        fetchData();
    }, [currentIssue])
    return (
        <Modal isOpen={modalEditIssue} toggle={toggleEditIssue} style={{ maxWidth: '600px', width: '100%' }}>
                    <ModalHeader toggle={toggleEditIssue}>Edit Issue</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit} className='px-3'>
                            <label>Issue Name</label>
                            <input type="text" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, issueName: e.target.value }
                                })
                            }} value={formData.issueName} className="form-control mb-2" id='feedback'></input>

                            <label>Estimated Date</label>
                            <input type="date" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, estimatedTime: e.target.value }
                                })
                            }} value={formData.estimatedTime} className="form-control mb-2" id='feedback'></input>

                            <label>Description</label>
                            <textarea onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, description: e.target.value }
                                })
                            }} value={formData.description} className="form-control mb-2"></textarea>

                            <label>Assignee</label><br></br>
                            <select onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, assignee: e.target.value }
                                })
                            }} value={formData.assignee} className="form-select form-select-sm mb-2" aria-label=".form-select-sm example">
                                <option selected>Select</option>
                                <option value="631b186639d97a765049abaf">MeemanageRavindu</option>
                            </select>

                            <label>Points</label><br></br>
                            <input type="number" onChange={(e) => {
                                setFormData(prev => {
                                    return { ...prev, points: e.target.value }
                                })
                            }} value={formData.points} className="form-control mb-3" />

                            <input type="submit" className="btn btn-dark mb-2" value="Update" />
                        </form>
                    </ModalBody>
                </Modal>
    )
}
export default function Issues() {
    const [issues, setIssues] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        const fetchData = async () => {
            const result = await axios(`http://localhost:3001/api/sprint/issues/${id}/`);
            setIssues(result.data);
            console.log(result.data);
        }
        fetchData();
    }, []);

    const [modalEditIssue, setModalEditIssue] = useState(false);

    const [currentIssue, setCurrentIssue] = useState("");

    const toggleEditIssue = (issue_id) => {
        setModalEditIssue(!modalEditIssue);
        setCurrentIssue(issue_id);
    };

    return (
        <div>
            <div className="container">
                <Header />
                <div className="mt-4" style={{ padding: "0 2rem", backgroundColor: "white", borderRadius: "20px" }}>
                    <table class="table">
                        <tbody>
                            {
                                // issues.map((issue) => {
                                //     return (
                                //         <tr>
                                //             <td scope="row">
                                //                 {issue.issueName}
                                //             </td>
                                //         </tr>
                                //     )
                                // })
                            // {
                                issues.map((task) => {

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
                                            <td>{task.assignee == null ? 'Not Assigned ' : task.assignee_name}</td>
                                            <td>By {task.estimatedTime}</td>
                                            <td>{task.points}</td>
                                            <td>
                                                <div>
                                                    <AiFillEdit size={25} style={{ color: "#A80038", marginRight: "20px" }} onClick={() => {toggleEditIssue(task._id)}} />
                                                    <IoIosRemoveCircle size={25} style={{ color: "#A80038" }} />
                                                </div>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                    <EditIssue modalEditIssue={modalEditIssue} setModalEditIssue={setModalEditIssue} currentIssue={currentIssue}/>
                </div>
            </div>
        </div>
    )
}