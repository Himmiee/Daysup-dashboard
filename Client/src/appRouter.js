import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "./pages/Authentication/Register";
import LoginComponent from "./pages/Authentication/Login";
import Dashboard from "./pages/Dashboard/dashboard";
import App from "./App";

const AppRouter = () => {
  const RegisterComponent = lazy(() => import("./pages/Authentication/Register"));
  const LoginComponent = lazy(() => import("./pages/Authentication/Login"));
  const DashboardComponent = lazy(() => import("./pages/Dashboard/dashboard"));
  return (
    <div>
      <Suspense fallback={"test"}>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
