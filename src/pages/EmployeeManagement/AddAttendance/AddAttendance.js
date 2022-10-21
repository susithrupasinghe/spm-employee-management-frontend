import {Circles}  from "react-loader-spinner";
import Clock from "react-live-clock";
import { useEffect } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
import { Calendar } from "antd";
import { useState } from "react";
import axios from "axios";

const ProfileDetails = (props) => {
    return(
        <div >
        <div className="card boderRadiusCards" style={{ maxWidth: '20rem', maxHeight:'25rem'}}>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12 empDashboardUserDetailsTwo mt-2 text-center">
                <h1 className="fw-bold text-muted fs-7 p-4">
                  <Clock date format="HH:mm:ss" interval={1000} ticking={true} timezone={'Asia/Colombo'} />      
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
const MarkAttendenceForm = (props) => {
    const [inTime,setInTime]=useState("");
    const [outTime,setOutTime]=useState("");
    const [date,setDate] = useState("");

    const email = "as@gmail.com";

    const Add = async () =>{
        if(inTime===""){
          setInTime(new Date().toLocaleTimeString());
          setDate(new Date().toLocaleDateString());
        }else{
          setOutTime(new Date().toLocaleTimeString());
          const data ={
            inTime:inTime,
            outTime:new Date().toLocaleTimeString(),
            date:date,
          }
          try {
            const res = await axios.post(
              `http://localhost:5000/api/employee/attendence/${email}`,
              data
            );
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }
    };

    return (
        <div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <Form>
                      <FormGroup className="mt-2">
                        <Label for="inTime">In Time</Label>
                        <Input type="text" name="inTime" id="inTime" disabled value={inTime} />
                      </FormGroup>
                      <FormGroup className="mt-2">
                        <Label for="outTime">Out Time</Label>
                        <Input type="text" name="outTime" id="outTime" disabled value={outTime} />
                      </FormGroup>
                      <Button
                          className="modalCreateBtn"
                          onClick={() =>{Add()}}
                        >
                          ADD
                        </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
}

const AttendanceHostory = (props) => {

    const [list,setList] = useState();
    const [loading, setLoading] = useState(true);

    const email = "as@gmail.com";

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          `http://localhost:5000/api/employee/attendenceList/${email}`
        );
        setList(result.data.attendanceList);
        setLoading(false);
        console.log(result);
      };
      fetchData();
    }, []);
   
    
    if (loading) {
      return (
        <>
          <p>Data Loading</p>
        </>
      );
    }else {
    return (
        <div>
        <div className="card mb-5 p-5 boderRadiusCards">
          <div className="card-body">
            <table className="table table-hover">
              <thead style={{ backgroundColor: "#2B2024" , color: "white", borderRadius: '10px'}}>
                <tr>
                  <th>Date</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                </tr>
              </thead>
              {list.map((employee) => (
                          <tbody>
                            <tr>
                              <td >{employee.date}</td>
                              <td >{employee.inTime}</td>
                              <td >{employee.outTime}</td>
                            </tr>
                          </tbody>
                        ))}
            </table>
          </div>
        </div>
      </div>
    )
              }
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