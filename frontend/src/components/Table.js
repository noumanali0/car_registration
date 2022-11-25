import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";

function Tablle({ cars }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    console.log(id);
    const res = await axiosInstance.post("/deletecar/", { id });
    navigate("/");
    window.location.reload();
  };

  return (
    <Table striped bordered hover className="my-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Make</th>
          <th>Model</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => {
          return (
            <tr key={index}>
              <td>{car.name}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
                <button className="btn btn-primary m-1">
                  <Link
                    to={`/editcar/${car._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Edit
                  </Link>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tablle;
