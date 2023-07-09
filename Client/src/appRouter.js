import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ItemContext } from "./context/store";
import Dashboard from "./pages/Dashboard/dashboard";

const AppRouter = () => {
  const { showNav, setShowNav } = ItemContext();
  const RegisterComponent = lazy(() =>
    import("./pages/Authentication/Register")
  );
  const LoginComponent = lazy(() => import("./pages/Authentication/Login"));
  const EventComponent = lazy(() => import("./pages/others/event"));
  const MainComponent = lazy(() => import("./pages/others/main"));
  const UserComponent = lazy(() => import("./pages/others/Community"));
  const NotificationComponent = lazy(() =>
    import("./pages/others/notifications")
  );
  const SettingsComponent = lazy(() => import("./pages/others/settings"));
  return (
    <section>
      <div className={showNav ? "flex" : ""}>
        {showNav && <Dashboard />}
        <Suspense fallback={"test"}>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/event" element={<EventComponent />} />
            <Route path="/user" element={<UserComponent />} />
            <Route path="/main" element={<MainComponent />} />
            <Route path="/notification" element={<NotificationComponent />} />
            <Route path="/settings" element={<SettingsComponent />} />
          </Routes>
        </Suspense>
      </div>
    </section>
  );
};

export default AppRouter;
