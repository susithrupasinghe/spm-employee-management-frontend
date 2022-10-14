import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, AutoComplete } from "antd";
import "./ViewDocumentation.css";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Tooltip } from "reactstrap";
import { useNavigate } from "react-router-dom";

// const queryParams = new URLSearchParams(window.location.search);
// const projectId = queryParams.get("id");

// console.log(projectId);

const ViewEmployeeDocument = () => {

  const { id } = useParams()
  console.log(id);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [documents, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:5000/api/documentation/readDocmentationByProject?id=6174c1868706230016a66ab2"
      );
      setProjects(result);
      setLoading(false);
      console.log(result);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const navigateAddDocumentation = (id) => {
    navigate(`/project/addDocumentation/${id}`, {
      state: {},
    });
  };

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
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    // const [data, setData] = useState();
    // // const [table, setTable] = useState("");

    // const handleSearch = (value) => {
    //   setOptions(value ? searchResult(value) : []);
    // };

    // const onSelect = (value) => {
    //   console.log("onSelect", value);
    // };

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
              style={{ marginLeft: "15rem" }}
              onClick={navigateAddDocumentation}
            >
              Add Documentation
            </Button>
            <h5 style={{ marginLeft: "1rem" }}>Documentations</h5>
          </a>
          {/* </Tooltip> */}

          <div class="row">
            <div class="card" style={{ borderRadius: "15px" }}>
              <div class="card-body">
                <div class="col-10">
                  <div class="row">
                    <div>
                      {documents.data.Document.map((document) => (
                        <div>
                          <div class="list-group" id="list-tab" role="tablist">
                            <a
                              class="list-group-item list-group-item-action"
                              id=""
                              data-toggle="list"
                              // href="#list-home"
                              role="tab"
                              aria-controls="home"
                            >
                              {document.documentationTitle}
                            </a>
                          </div>
                          <div class="tab-content"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div class="col-8"></div>
              </div>
            </div>

            {/* <div class="col-10">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body">
                  <h5>we</h5>
                </div>
              </div>
            </div> */}
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
