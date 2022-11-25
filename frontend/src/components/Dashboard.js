import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import Navbarr from "./Navbarr";
import NavDropdown from "react-bootstrap/NavDropdown";
import Tablle from "./Table";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const getCars = async () => {
    const res = await axiosInstance.get("/");
    setCars(res.data);
    setFilteredCars(res.data);
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleChange = async (e) => {
    setFilteredCars(cars.filter((car) => car.category === e));
  };
  console.log(cars);
  return (
    <>
      <Navbarr />
      <div className=" container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 offset-2">
            <NavDropdown
              title="Category"
              id="collasible-nav-dropdown"
              onSelect={handleChange}
            >
              <NavDropdown.Item eventKey="Bus" href="">
                Bus
              </NavDropdown.Item>
              <NavDropdown.Item href="" eventKey="Sedan">
                Sedan
              </NavDropdown.Item>
              <NavDropdown.Item href="" eventKey="SUV">
                SUV
              </NavDropdown.Item>
              <NavDropdown.Item href="" eventKey="Hatchback">
                Hatchback
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <Tablle cars={filteredCars} />
        <Link to="addcar">Add New</Link>
      </div>
    </>
  );
};

export default Dashboard;
