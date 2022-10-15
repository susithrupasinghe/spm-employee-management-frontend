import { useEffect, useState } from "react";
import axios from "axios";
import { NotificationContainer, NotificationManager } from 'react-notifications';
const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black" }}
    >
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Edit Your Profile
      </span>
    </div>
  );
};



const ProfileForm = () => {
  const [firstName,setFirstName] = useState("");
  const [id,setId]=useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [cPassword,setCPasssword] = useState("");
  const [address,setAddress] = useState("");
  const [mobileNumber,setMobileNumber] = useState("")
  const [loading, setLoading] = useState(true);

  const email = "testadmin@gmail.com";

  useEffect(() =>{
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/employee/${email}`
      );
      setFirstName(result.data.firstName);
      setId(result.data._id)
      setLastName(result.data.lastName);
      setUsername(result.data.username);
      setAddress(result.data.address);
      setMobileNumber(result.data.mobileNumber);
      setLoading(false);
    };
    fetchData();
  },[])

  const Update = async() =>{
    if(password === cPassword){
    console.log("update")
    let data;
    if(password===""){
    data ={
      firstName:firstName,
      lastName:lastName,
      username:username,
      address:address,
      mobileNumber:mobileNumber
    }
    }else{
          data ={
          firstName:firstName,
          lastName:lastName,
          username:username,
          address:address,
          mobileNumber:mobileNumber,
          password:password
        }
  }
    console.table(data)
    try {
      const res = await axios.put(
        `http://localhost:5000/api/employee/updateprofile/${id}`,
        data
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }else{
    NotificationManager.error('passwords does not match')
  }
  }




  if (loading) {
    return (
      <>
        <p>Data Loading</p>
      </>
    );
  }else{
    return (
      <div>
        <NotificationContainer />
        {/* <div class="card col-sm-10" style={{borderRadius: "10px"}}>
          <div class="card-body">
          <form>
            <div class="row">
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>First Name</label>
                <input type="text" class="form-control" value={emp.firstName}/>
              </div>
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>Last Name</label>
                <input type="text" class="form-control" value={emp.lastName}/>
              </div>
            </div>
            <div class="row" style={{marginTop: "1.5rem"}}>
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>Username</label>
                <input type="text" class="form-control" value={emp.username}/>
              </div>
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>Contact Number</label>
                <input type="text" class="form-control" value={emp.mobileNumber}/>
              </div>
            </div>
            <div class="row" style={{marginTop: "1.5rem"}}>
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>Password</label>
                <input type="password" class="form-control" />
              </div>
              <div class="col">
              <label style={{marginBottom: "0.5rem"}}>Confirmed Password</label>
                <input type="password" class="form-control" />
              </div>
            </div>
            <div style={{marginTop: "1.5rem"}}>
            <label>Address</label>
            <textarea style={{marginTop: "0.5rem"}} class="form-control"  rows="3">{emp.address}</textarea>
            </div>
            <button type="button" class="btn btn-dark" style={{marginTop: "2rem", float: "right", padding: "8px 25px"}} >Update</button>
          </form>
          </div>
        </div> */}
        <div class="card col-sm-10" style={{borderRadius: "10px"}}>
        <div class="card-body">
        <form >
          <div class="row">
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>First Name</label>
              <input type="text" 
              onChange={(e) => setFirstName(e.target.value)} 
              defaultValue ={firstName}
              class="form-control" />
            </div>
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>Last Name</label>
              <input type="text"
              onChange={(e) => setLastName(e.target.value)} 
              defaultValue ={lastName}
              class="form-control" />
            </div>
          </div>
          <div class="row" style={{marginTop: "1.5rem"}}>
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>Username</label>
              <input type="text" 
              onChange={(e) => setUsername(e.target.value)} 
              defaultValue ={username}
              class="form-control" />
            </div>
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>Contact Number</label>
              <input type="text"
              onChange={(e) => setMobileNumber(e.target.value)} 
              defaultValue ={mobileNumber}
              class="form-control" />
            </div>
          </div>
          <div class="row" style={{marginTop: "1.5rem"}}>
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>Password</label>
              <input 
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
              class="form-control" />
            </div>
            <div class="col">
            <label style={{marginBottom: "0.5rem"}}>Confirmed Password</label>
              <input type="password" class="form-control" />
            </div>
          </div>
          <div style={{marginTop: "1.5rem"}}>
          <label>Address</label>
          <textarea 
          style={{marginTop: "0.5rem"}}
          onChange={(e) => setAddress(e.target.value)} 
          defaultValue ={address} 
          class="form-control" 
          rows="3"></textarea>
          </div>
          <button type="button" onClick={Update} class="btn btn-dark" style={{marginTop: "2rem", float: "right", padding: "8px 25px"}} >Update</button>
        </form>
        </div>
      </div>
      </div>
    );
  }

};



const EditProfile = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{marginBottom: "2rem"}}>
            <Header />
          </div>
          <div className="col-lg-12">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
