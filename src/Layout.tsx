import React from "react";
import cn from "classnames";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header className="bg-slate-800 text-white px-3 sm:px-0 ">
        <nav className="container mx-auto flex justify-between items-center md:w-2/3 xl:w-1/2">
          <Link to="/" className="py-3 font-bold">
            Blog
          </Link>
          <Link to="/contact" className="py-3 font-bold">
            <FontAwesomeIcon className={cn("mr-2")} icon={faEnvelope} />
            お問い合わせ
          </Link>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} {...pageTransition}>
          <article className="container mx-auto px-3 md:w-2/3 xl:w-1/2">
            <Outlet />
          </article>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
