import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components";
import "./assets/css/theme.css";

document.title = "ZST interview";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
