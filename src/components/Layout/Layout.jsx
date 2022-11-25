import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getTitle } from "./utils";
import "./style.css";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = getTitle(location.pathname);
  const isFriendsRoute = location.pathname.includes("friend");
  return (
    <div>
      <div className="container">
        {isFriendsRoute && (
          <motion.img
            src="/back-arrow.svg"
            className="back-arrow"
            whileHover={{
              scale: 1.2,
              cursor: "pointer",
              transition: {
                duration: 0.3,
              },
            }}
            onClick={() => navigate("/")}
          />
        )}
        <h3 className="title">{title}</h3>
      </div>
      <AnimatePresence>{<Outlet />}</AnimatePresence>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
