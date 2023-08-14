import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ItemContext } from "./context/store";
import Dashboard from "./pages/Dashboard/dashboard";
import NavComponent from "./pages/Dashboard/navbar";
import EventComponent from "./pages/others/event";
import ProtectedRoutes from "./utils/protectedRoute";
import UserComponent from "./pages/others/Community";
import MainComponent from "./pages/others/main";
import NotificationComponent from "./pages/others/notifications";
import SettingsComponent from "./pages/others/settings";
import LoaderComponent from "./components/loader";
import RegisterComponent from "./pages/Authentication/Register";
import LoginComponent from "./pages/Authentication/Login";
import { PopupModalComponent } from "./components/modal";

const AppRouter = () => {
  const { showNav, popErr, popupMsg, successMsg } = ItemContext();
  const location = useLocation();

  let name = "Daysup";

  window.addEventListener("blur", () => {
    document.title = "Daysup misses you.";
  });
  window.addEventListener("focus", () => {
    document.title = name;
  });
  // const EventComponent = lazy(() => import("./pages/others/event"));
  // const Dashboard = lazy(() => import("./pages/Dashboard/dashboard"));
  // const MainComponent = lazy(() => import("./pages/others/main"));
  // const UserComponent = lazy(() => import("./pages/others/Community"));
  // const NotificationComponent = lazy(() =>
  //   import("./pages/others/notifications")
  // );
  // const SettingsComponent = lazy(() => import("./pages/others/settings"));
  return (
    <section>
      <div className="">
        <div className={showNav ? "flex" : ""}>
          {popupMsg ? <PopupModalComponent /> : " "}
          {showNav && <Dashboard />}
          {/* <Suspense fallback={<LoaderComponent />}> */}
          {/* {showNav && <Dashboard />} */}
          <Routes location={location}>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/event" element={<EventComponent />} />
              <Route path="/user" element={<UserComponent />} />
              <Route path="/main" element={<MainComponent />} />
              <Route path="/notification" element={<NotificationComponent />} />
              <Route path="/settings" element={<SettingsComponent />} />
            </Route>
          </Routes>
          {/* </Suspense> */}
        </div>
      </div>
    </section>
  );
};

export default AppRouter;
