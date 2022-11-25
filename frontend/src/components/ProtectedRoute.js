import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "./Login";

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
