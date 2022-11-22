import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet, matchPath, useLocation } from "react-router-dom";

function getTitle(url) {
  if (matchPath({ path: "/friend/:id" }, url)) return "My Friend Details";
  if (matchPath(url, "/")) return "Animated Shared Layout Demo";
  return "";
}

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
