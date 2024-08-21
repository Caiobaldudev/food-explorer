import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.routes";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";
import Header from "../components/Header/Header";

const Routes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? <AppRouter /> && <Header /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export { Routes };
