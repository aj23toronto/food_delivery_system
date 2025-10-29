import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      {/* ✅ Only ONE BrowserRouter in your whole app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  </React.StrictMode>
);
