import React from "react";
import cn from "classnames";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  return (
    <>
      <div className="bg-slate-800 text-white px-3 sm:px-0 ">
        <div className="container mx-auto flex justify-between items-center md:w-2/3 xl:w-1/2">
          <Link to="/" className="py-3 font-bold">
            Blog
          </Link>
          <Link to="/contact" className="py-3 font-bold">
            <FontAwesomeIcon className={cn("mr-2")} icon={faEnvelope} />
            お問い合わせ
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-0 md:w-2/3 xl:w-1/2">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
