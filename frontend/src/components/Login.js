import React, { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const token = await axiosInstance.post("/login", loginData);
    localStorage.setItem("login", token.data);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <h2 className="text-center my-5">Login</h2>
      <div className="container my-5">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <Link to="/signup">New User ?</Link>
              </div>
              <button type="submit" className=" my-2 btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
