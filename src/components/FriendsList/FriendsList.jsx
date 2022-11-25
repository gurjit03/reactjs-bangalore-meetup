import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import friends from "../../data/friends";
import "./style.css";

const FriendsList = () => {
  return (
    <motion.ul
      className="friends-list"
      initial={{
        x: "-50px",
      }}
      animate={{
        x: 0,
      }}
    >
      {friends.map((f) => {
        const containerId = f.id;
        const profileId = `${f.id}-profile`;
        const nameId = `${f.id}-name`;
        return (
          <Link key={f.id} to={`friend/${f.id}`}>
            <motion.li className="friend-item">
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
            </motion.li>
          </Link>
        );
      })}
    </motion.ul>
  );
};

export default FriendsList;
