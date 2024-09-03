import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.routes";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";
import Header from "../components/Header/Header";
import { AdminRoutes } from "./admin.routes";
import { USER_ROLE } from "../utils/roles";
import AppFooter from "../components/Footer/Footer";

const Routes = () => {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <AppRouter />;
      default:
        return <AppRouter />;
    }
  }

  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {user ? (
          <>
            <Header />
            <div style={{ flex: "1" }}>
              <AcessRoute />
            </div>
            <AppFooter />
          </>
        ) : (
          <AuthRoutes />
        )}
      </div>
    </BrowserRouter>
  );
};

export { Routes };
