import React, { useState, useEffect } from 'react'
import "./headerComponent.css";


const Home = () => {
    const userDetails = {
        role: null,
        name: 'susith',
        img: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.webp'
    }


    useEffect(() => {

        switch (localStorage.getItem("role")) {
            case "ADMIN":
                userDetails.role = 'ADMIN';
                break;
            case "PM":
                userDetails.role = 'PM';
                break;
            case "EMPLOYEE":
                userDetails.role = 'EMPLOYEE';
                break;
            default:
                break;
        }

    }, [])

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg econnecteeNavbar">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/">
                            Econnectee
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            {userDetails.role == null &&
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link text-white"
                                                aria-current="page"
                                                href="/admindashboard"
                                            >
                                                Home
                                            </a>
                                        </li>
                                    </ul>
                                    <span class="span-inline my-2 my-lg-0">
                                        <div className="row">
                                            <div className="col">
                                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li class="nav-item dropdown">
                                                        <a
                                                            class="nav-link dropdown-toggle text-white"
                                                            href="#"
                                                            id="navbarDropdown"
                                                            role="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            {userDetails.name}
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu"
                                                            aria-labelledby="navbarDropdown"
                                                        >
                                                            <li>
                                                                <a
                                                                    class="dropdown-item"
                                                                    href="#"
                                                                    onClick={() => {
                                                                        //
                                                                    }}
                                                                >
                                                                    Logout
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                {
                                                    <img
                                                        width="50px"
                                                        height="50px"
                                                        style={{ borderRadius: "50%" }}
                                                        src={userDetails.img}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </div>


        </>
    )


}

export default Home;