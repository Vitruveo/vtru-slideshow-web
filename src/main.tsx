import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import packageInfo from "../package.json";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <meta name="version" content={packageInfo.version} />
    </Helmet>
    <App />
  </React.StrictMode>
);
