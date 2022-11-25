import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/editcar/:id" element={<EditCar />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
