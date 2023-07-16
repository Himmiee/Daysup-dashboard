import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./context/store";
import "./index.css";
import AppRouter from "./appRouter";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <AppRouter />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
