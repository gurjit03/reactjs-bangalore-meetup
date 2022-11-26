import React from "react";
import { motion } from "framer-motion";
import friends from "../../data/friends";
import FriendListItem from "./FriendListItem";
import "./style.css";

const container = {
  hidden: {
    opacity: 0,
    x: "-50px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.05,
    },
  },
};

const FriendsList = () => {
  return (
    <motion.ul
      className="friends-list"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {friends.map((f) => (
        <FriendListItem key={f.id} friend={f} />
      ))}
    </motion.ul>
  );
};

export default FriendsList;
