import {Circles}  from "react-loader-spinner";
import Clock from "react-live-clock";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";

const ProfileDetails = (props) => {
    return(
        <div >
        <div className="card boderRadiusCards" style={{ maxWidth: '20rem', maxHeight:'25rem'}}>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 text-center" >
                <img
                  className="img-fluid"
                  src={props.singleEmployee.profileImg}
                  alt="empImage"
                  style={{borderRadius: '50%', maxHeight:'100px'}}
                />
              </div>
              <div className="col-lg-12 empDashboardUserDetailsTwo mt-2 text-center">
                <h6 className="fw-bold fs-5">{props.singleEmployee.name}</h6>
                <h6 className="fw-bold text-muted">{props.singleEmployee.username}</h6>
                <h6 className="fw-bold text-muted">{props.singleEmployee.department}</h6>
                
                <h1 className="fw-bold text-muted fs-7 p-4">
                  <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
const MarkAttendenceForm = (props) => {
    return (
        <div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <Form>
                      <FormGroup className="mt-2">
                        <Label for="inTime">In Time</Label>
                        <Input type="text" name="inTime" id="inTime" value={props.singleEmployee && props.singleEmployee.attendanceList.length > 0 ? props.singleEmployee.attendanceList[0].inTime : ""} disabled />
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <Form>
                      <FormGroup className="mt-2">
                        <Label for="outTime">Out Time</Label>
                        <Input type="text" name="outTime" id="outTime" value={props.singleEmployee &&  props.singleEmployee.attendanceList.length > 0 ? props.singleEmployee.attendanceList[0].outTime : ""} disabled  />
                      </FormGroup>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

        <div className="col-md-12 text-center">
            <Form>
            <FormGroup className="mt-2">
                        <Button
                          className="modalCreateBtn"
                          onClick={()=> {}}
                        >
                          ADD
                        </Button>
                      </FormGroup>
            </Form>
        </div>
      </div>
    )
}

const AttendanceHostory = (props) => {


    return (
        <div>
        <div className="card mb-5 p-5 boderRadiusCards">
          <div className="card-body">
            <table className="table table-hover">
              <thead style={{ backgroundColor: "#2B2024" , color: "white", borderRadius: '10px'}}>
                <tr>
                  <th>No</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                  <th>Current Project</th>

                </tr>
              </thead>
              <tbody>
                {
                props.singleEmployee && props.singleEmployee.attendanceList.map(
                  (singleAttendence) => {

                    return (
                      <tr>
                        <td>
                          <h6>1</h6>
                        </td>
                        <td>
                          <h6>{singleAttendence.inTime}</h6>
                        </td>
                        <td>
                          <h6>{singleAttendence.outTime}</h6>
                        </td>
                        <td>
                          <h6>{singleAttendence.currentProject}</h6>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}


const AddAtendance = () => {


    const 
        a = {
            name: "Susith Rupasinghe",
            username: "Susith Rupasinghe",
            department: "Faculty Of Computing",
            profileImg: "https://i.pravatar.cc/150?img=3",
            attendanceList : [
                {
                    date: 'qwdhuiu iud wqdgu wdgi',
                    inTime: 'qwdhuiu iud wqdgu wdgi',
                    outTime: 'qwdhuiu iud wqdgu wdgi',
                    currentProject: 'qwdhuiu iud wqdgu wdgi'
                },
                {
                    date: 'qwdhuiu iud efewqdgu wdgi',
                    inTime: '5qwdhuiu iud wefeqdgu wdgi4456456',
                    outTime: 'qwdhuiu iud e3dwqdgu wdgi',
                    currentProject: 'qwdhuiu iud wqdgu wdgi'
                }
            ]


        }
    
    return (
        <div>
        {a ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <ProfileDetails singleEmployee={a}/>
              </div>
              <div className="col-md-9">
                <AttendanceHostory singleEmployee={a}/>
              </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-4">
                <MarkAttendenceForm singleEmployee={a}/>
              </div>
            </div>
          </div>
        ) : (
          <div className="loadingScreen">
            <div className="col-12 p-5">
              <center>
                <Circles
                  type="Grid"
                  color="#087E8B"
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                />
              </center>
            </div>
          </div>
        )}
      </div>
    )
}


export default AddAtendance;