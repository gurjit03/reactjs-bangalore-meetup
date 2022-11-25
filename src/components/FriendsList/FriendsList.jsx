import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import friends from "../../data/friends";
import "./style.css";

const container = {
  hidden: {
    x: "-50px",
    opacity: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.05,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: "-20px" },
  show: { opacity: 1, x: 0 },
};

const FriendsList = () => {
  return (
    <motion.ul
      className="friends-list"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {friends.map((f) => {
        const containerId = f.id;
        const profileId = `${f.id}-profile`;
        const nameId = `${f.id}-name`;
        return (
          <motion.li key={f.id} className="friend-item" variants={item}>
            <Link to={`friend/${f.id}`}>
              <motion.article className="friend-card" layoutId={containerId}>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId={profileId}
                  className="friend-profile"
                  src={f.src}
                />
                <motion.p className="friend-name" layoutId={nameId}>
                  {f.name}
                </motion.p>
              </motion.article>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default FriendsList;
