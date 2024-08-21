import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.routes";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";
import Header from "../components/Header/Header";
import { AdminRoutes } from "./admin.routes";
import { USER_ROLE } from "../utils/roles";

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
      {user ? <AcessRoute /> && <Header /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export { Routes };
