import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.js";
import theme from "./styles/theme.js";
import { AuthProvider } from "../src/hooks/auth.jsx";
import { Routes } from "./routes";
import { OrderProvider } from "./contexts/OrderContext.jsx";
import { SearchProvider } from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <OrderProvider>
          <SearchProvider>
            <Routes />
          </SearchProvider>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
