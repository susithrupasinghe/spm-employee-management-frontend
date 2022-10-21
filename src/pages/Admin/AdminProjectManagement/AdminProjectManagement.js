import { useEffect, useState } from "react";
import { AiOutlineSearch, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

const ModelPopUp = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [projectName, setProjectName] = useState("");
  const [descripton, setDescription] = useState("");
  const [projectManager, setProjectManager] = useState([]);
  const [pmId, setPmId] = useState(null);

  useEffect(() => {
    const fetchPMData = async () => {
      const result = await axios.get(
        "http://localhost:5000/api/projectmanager/all"
      );
      console.log("result : ", result.data);
      setProjectManager(result.data);
    };
    fetchPMData();
  }, []);

  const handleUpdate = async () => {
    console.log("ok");
    const data = {
      projectName: projectName,
      descripton: descripton,
      projectManager: pmId,
    };

    try {
      const res = await axios.put(
        `http://localhost:5000/api/project/${props.project._id}`,
        data
      );
      console.log(res);
    } catch (error) {}
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete this record?")) {
      axios.delete(`http://localhost:5000/api/project/${id}`)
      .then((res) => {
        if(res) {
          alert("Record deleted successfully");
          window.location.reload();
        }
      })
    }
  }

  return (
    <tr>
      <td>{props.project._id}</td>
      <td>{props.project.projectName}</td>
      <td>
        <AiFillEdit
          size={25}
          style={{ color: "#A80038", marginRight: "20px" }}
          onClick={toggle}
        />
        <MdDelete size={25} style={{ color: "#A80038" }} onClick={() =>handleDelete(props.project._id)} />
      </td>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Project Update</ModalHeader>
        <ModalBody>
          <form onSubmit={handleUpdate}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Project Name</label>
              <input
                type="text"
                class="form-control"
                defaultValue={props.project.projectName}
                placeholder="Project Name"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div class="form-group" style={{ marginTop: "1rem" }}>
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                defaultValue={props.project.descripton}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div class="form-group" style={{ marginTop: "1rem" }}>
              <label for="exampleFormControlSelect1">Project Manager</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                // defaultValue={props.project.projectManager.name}
                onChange={(e) => {const data = e.target.value; setPmId(data)}}
              >
                {/* <option selected>{props.project.projectManager.name}</option> */}
                {projectManager.map((pm) => (
                  <option value={pm._id}>{pm.name}</option>
                ))}
              </select>
            </div>
            <ModalFooter>
              <Button type="submit" class="btn btn-dark" onClick={toggle}>
                Update
              </Button>{" "}
              <Button class="btn btn-danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </tr>
  );
};

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [projectName, setProjectName] = useState("");
  const [descripton, setDescription] = useState("");
  const [projectManager, setProjectManager] = useState([]);
  const [pmId, setPmId] = useState(null);

  useEffect(() => {
    const fetchPMData = async () => {
      const result = await axios.get(
        "http://localhost:5000/api/projectmanager/all"
      );
      console.log("result : ", result.data);
      setProjectManager(result.data);
    };
    fetchPMData();
  }, []);

  console.log("PM",projectManager);

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log("pm id : ", pmId);

    const data = {
      projectName: projectName,
      descripton: descripton,
      projectManager: pmId,
    };
    console.log(data);
    try {
      const res = await axios.post(`http://localhost:5000/api/project/`, data);
      if (res) {
        console.log(res);
        toggle();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black" }}
    >
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Project Create</ModalHeader>
        <ModalBody>
          <form onSubmit={handleAdd}>
            <div class="form-group">
              <label for="exampleFormControlInput1">Project Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Project Name"
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>
            <div class="form-group" style={{ marginTop: "1rem" }}>
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div class="form-group" style={{ marginTop: "1rem" }}>
              <label for="exampleFormControlSelect1">Project Manager</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => {const data = e.target.value; setPmId(data)}}
              >
                {projectManager.map((pm) => (
                  <option value={pm._id}>{pm.name}</option>
                ))}
              </select>
            </div>
            <ModalFooter>
              <Button type="submit" class="btn btn-dark">
                Create
              </Button>{" "}
              <Button class="btn btn-danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
      <span className="display-6" style={{ fontWeight: "bold", float: "left" }}>
        Project Management
      </span>
      <button
        type="button"
        onClick={toggle}
        class="btn btn-dark"
        style={{ float: "right" }}
      >
        Create
      </button>
    </div>
  );
};

const Table = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/api/project/all");
      setProjects(result.data);
    };
    fetchData();
  }, []);

  console.log(projects);
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <div style={{ display: "flex" }}>
        <div>
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            10 Projects
          </span>
          <br />
          <span style={{ color: "gray" }}>
            31/Jan/21 9.30PM - 01/Feb/22 9.50 AM
          </span>
        </div>
        <div class="input-group" style={{ float: "right", textAlign: "right" }}>
          <div class="form-outline">
            <input id="search-focus" type="search" class="form-control" />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            style={{ height: "38px" }}
          >
            <i class="fas fa-search"></i>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <table className="table table-striped" style={{ marginTop: "2rem" }}>
        <tbody>
          {projects.map((project) => {
            return <ModelPopUp project={project} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const AdminProjectManagement = () => {
  const dataSet = [
    {
      project_id: "12354677678",
      project_name: "Project1",
      description: "This is a project",
      project_manager: [{ name: "Susith rupasinghe" }],
    },
    {
      project_id: "12354677678",
      project_name: "Project2",
      description: "This is a project fsdfsdfsdfsd",
      project_manager: [{ name: "Susith rupasinghe" }],
    },
    {
      project_id: "12354677678",
      project_name: "Project3",
      description: "This is a project dasfdadsfsadf",
      project_manager: [{ name: "Susith rupasinghe" }],
    },
    {
      project_id: "12354677678",
      project_name: "Project4",
      description: "This is a project fsdfsdfsdfsdfs",
      project_manager: [{ name: "Susith rupasinghe" }],
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="card boderRadiusCards px-5 mt-3">
            <div className="card-body">
              <div className="col-lg-12">
                <Table data={dataSet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectManagement;
