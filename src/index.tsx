import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Router from "./Router";
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={Router} />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
