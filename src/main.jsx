import "./index.scss";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import RentProvider from "./context/rentProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RentProvider>
        <App />
    </RentProvider>
  </React.StrictMode>
);
