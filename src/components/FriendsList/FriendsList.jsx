import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import friends from "../../data/friends";
import "./style.css";

const friendsListVariants = {
  initial: { x: "-50px" },
  animate: {
    x: 0,
  },
};

const FriendsList = () => {
  return (
    <motion.ul
      className="friends-list"
      variants={friendsListVariants}
      initial="initial"
      animate="animate"
    >
      {friends.map((f) => {
        return (
          <Link key={f.id} to={`friend/${f.id}`}>
            <motion.li className="friend-item" variants={friendsListVariants}>
              <motion.article className="friend-card" layoutId={f.id}>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  layoutId={`${f.id}-profile`}
                  className="friend-profile"
                  src={f.src}
                />
                <motion.p className="friend-name" layoutId={`${f.id}-name`}>
                  {f.name}
                </motion.p>
              </motion.article>
            </motion.li>
          </Link>
        );
      })}
    </motion.ul>
  );
};

export default FriendsList;
