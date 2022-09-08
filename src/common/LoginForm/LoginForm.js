import { Button, Form, FormGroup, Input } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {

    const role = props.role;
    const state = {
        email: "",
        password: "",
        modalProjectManager: false,
        modalEmployee: false,
    };


    return (
        <div className="container text-center">
            <div className="container mt-5">
                <h5> {role} LOGIN HERE !</h5>
            </div>
            <div className="container mt-3">
                <Form onSubmit={(e) => {
                    console.log(e);
                }}>
                    <FormGroup className="mt-2">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => {
                                console.log(e);
                            }}
                        />
                    </FormGroup>
                    <FormGroup className="mt-2">
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => {

                            }}
                        />
                    </FormGroup>
                    <a className="text-left" href={`/forgotpassword/${role}`}>
                        Forget password?
                    </a>
                    <FormGroup className="mt-2">
                        <Button className="mt-2 loginBtn">Login</Button>
                    </FormGroup>
                </Form>
            </div>
            
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <a href="/pmlogin">PRODUCT MANAGER</a>
                </div>
                <div className="col-md-6">
                    <a href="/adminlogin">ADMIN</a>
                </div>
            </div>

            {role === "PROJECT MANAGER" ? (
                <a href="/pmregister">Register Here !</a>
            ) : role === "ADMIN" ? (
                <a href="/adminregister">Register Here !</a>
            ) : (
                ""
            )}


        </div>
    )
}

export default Login;