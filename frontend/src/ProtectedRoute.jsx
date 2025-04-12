import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("nextoken");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
