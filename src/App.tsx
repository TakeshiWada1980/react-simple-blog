import React from "react";
import cn from "classnames";
import Articles from "./Articles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className={cn("text-xl font-bold")}>
        <h1>Hello World</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
