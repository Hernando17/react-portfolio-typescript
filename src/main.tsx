import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import Router from "./routers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
