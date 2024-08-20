import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app.routes";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { user } = useAuth();
  return <BrowserRouter>{user ? <AppRouter /> : <AuthRoutes />}</BrowserRouter>;
};

export { Routes };
