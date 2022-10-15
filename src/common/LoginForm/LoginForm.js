import { Button, Form, FormGroup, Input } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const role = props.role;
    const state = {
        email: "",
        password: "",
        modalProjectManager: false,
        modalEmployee: false,
    };
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (role === "ADMIN") {
            axios.post("http://localhost:5000/api/admin/login", {
                email: email,
                password: password,
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate("/admin/dashboard");
            });
        }
        else if (role === "PM") {
            axios.post("http://localhost:5000/api/projectmanager/login", {
                email: email,
                password: password,
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate("/pm/dashboard");
            });
        }
        else if (role === "EMPLOYEE") {
            axios.post("http://localhost:5000/api/employee/login", {
                email: email,
                password: password,
            }).then((res) => {
                localStorage.setItem("token", res.data.token);
                navigate("/employee/dashboard");
            });
        }
    }


    return (
        <div className="container text-center">
            <div className="container mt-5">
                <h5> {role} LOGIN HERE !</h5>
            </div>
            <div className="container mt-3">
                    <FormGroup className="mt-2">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
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
                                setPassword(e.target.value);
                            }}
                        />
                    </FormGroup>
                    <a className="text-left" href={`/forgotpassword/${role}`}>
                        Forget password?
                    </a>
                    <FormGroup className="mt-2">
                        <Button type="submit" onClick={handleLogin} className="mt-2 loginBtn">Login</Button>
                    </FormGroup>
            </div>
            
            <hr />
            

            {role === "PM" ? (
                <div className="row">
                <div className="col-md-6">
                    <a href="/emplogin">EMPLOYEE</a>
                </div>
                <div className="col-md-6">
                    <a href="/adminlogin">ADMIN</a>
                </div>
            </div>
            ) :  role === "ADMIN" ? (
                <div className="row">
                <div className="col-md-6">
                    <a href="/pmlogin">PRODUCT MANAGER</a>
                </div>
                <div className="col-md-6">
                    <a href="/emplogin">EMPLOYEE</a>
                </div>
            </div>
            ): role === "EMPLOYEE" ? (
                <div className="row">
                <div className="col-md-6">
                    <a href="/pmlogin">PRODUCT MANAGER</a>
                </div>
                <div className="col-md-6">
                    <a href="/adminlogin">ADMIN</a>
                </div>
            </div>
            ): ("")}

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