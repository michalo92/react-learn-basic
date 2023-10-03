import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bpbp from "./Modal";
import Apbp from "./App";
import AppImport from "./Input";
import ShowAndHide from "./ShowAndHide";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Apbp /> */}
    {/* <App /> */}
    {/* <AppImport /> */}
    <ShowAndHide />
  </React.StrictMode>
);
