import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getTitle } from "./utils";

const Layout = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);
  return (
    <div>
      <h3 className="title">{title}</h3>
      <AnimatePresence>{<Outlet />}</AnimatePresence>
    </div>
  );
};

export default Layout;
