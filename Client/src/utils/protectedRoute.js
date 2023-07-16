import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoutes = () => {
  const auth = localStorage.getItem("is_authenticated");
  const isAuthenticated = JSON.parse(auth);
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
