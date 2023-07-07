import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "./pages/Authentication/Register";
import LoginComponent from "./pages/Authentication/Login";
import App from "./App";

const AppRouter = () => {
    return (
      <div>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    )
    
};

export default AppRouter;
