import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ isSignedIn }) => {
  return isSignedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
