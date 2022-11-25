import React, { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleValidation = (event) => {
    let formIsValid = true;
    if (signupData.name.length === 0) {
      formIsValid = false;
      setNameError("Name cannot be empty");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!signupData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }
    if (!signupData.password.match(/^[a-zA-Z]{5,12}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 5 Chracters and Max 12 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const flag = handleValidation();
    if (flag) {
      const res = await axiosInstance.post("/register", signupData);
      navigate("/login");
    }
  };

  return (
    <>
      <h2 className="text-center my-5">SignUp</h2>
      <div className="container my-5">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="EmailInput"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  onChange={handleChange}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {nameError}
                </small>
              </div>
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
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
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
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group">
                <Link to="/login">Already have an account ?</Link>
              </div>

              <button type="submit" className=" my-2 btn btn-primary">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
