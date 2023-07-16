import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ItemContext } from "./context/store";
import Dashboard from "./pages/Dashboard/dashboard";
import NavComponent from "./pages/Dashboard/navbar";
import EventComponent from "./pages/others/event";
import ProtectedRoutes from "./utils/protectedRoute";
import LoaderComponent from "./components/loader";
import RegisterComponent from "./pages/Authentication/Register";
import LoginComponent from "./pages/Authentication/Login";

const AppRouter = () => {
  const { showNav } = ItemContext();
  const location = useLocation();
  // const EventComponent = lazy(() => import("./pages/others/event"));
  const MainComponent = lazy(() => import("./pages/others/main"));
  const UserComponent = lazy(() => import("./pages/others/Community"));
  const NotificationComponent = lazy(() =>
    import("./pages/others/notifications")
  );
  const SettingsComponent = lazy(() => import("./pages/others/settings"));
  return (
    <section>
      <div className="">
        <div className={showNav ? "flex" : ""}>
          {showNav && <Dashboard />}
          <Suspense fallback={<LoaderComponent />}>
            <Routes location={location}>
              <Route path="/" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/event" element={<EventComponent />} />
                <Route path="/user" element={<UserComponent />} />
                <Route path="/main" element={<MainComponent />} />
                <Route
                  path="/notification"
                  element={<NotificationComponent />}
                />
                <Route path="/settings" element={<SettingsComponent />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default AppRouter;
