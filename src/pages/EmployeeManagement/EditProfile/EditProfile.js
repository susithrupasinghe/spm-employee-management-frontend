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
  return (
    <div>
      <div class="card col-sm-10" style={{borderRadius: "10px"}}>
        <div class="card-body">
        <form>
  <div class="row">
    <div class="col">
    <label style={{marginBottom: "0.5rem"}}>First Name</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <label style={{marginBottom: "0.5rem"}}>Last Name</label>
      <input type="text" class="form-control" />
    </div>
  </div>
  <div class="row" style={{marginTop: "1.5rem"}}>
    <div class="col">
    <label style={{marginBottom: "0.5rem"}}>Username</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <label style={{marginBottom: "0.5rem"}}>Contact Number</label>
      <input type="text" class="form-control" />
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
  <textarea style={{marginTop: "0.5rem"}} class="form-control" placeholder="Type your message Here" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-dark" style={{marginTop: "2rem", float: "right", padding: "8px 25px"}} >Update</button>
</form>
        </div>
      </div>
    </div>
  );
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
