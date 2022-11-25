import React, { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    name: "",
    model: "",
    make: "",
    registeration: "",
    category: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const saveDetails = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post("/addCar", car);
    navigate("/");
  };

  return (
    <>
      <h2 className="text-center my-5">Add Details</h2>
      <div className="container my-5">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4">
            <form id="loginform" onSubmit={saveDetails}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="EmailInput"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="EmailInput"
                  name="model"
                  aria-describedby="emailHelp"
                  placeholder="Enter model"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Make</label>
                <input
                  type="text"
                  name="make"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter make"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Registeration</label>
                <input
                  type="text"
                  name="registeration"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="registeration"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="category"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className=" my-2 btn btn-success">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCar;
