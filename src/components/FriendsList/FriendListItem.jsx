import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const item = {
  hidden: { x: "-20px", transition: { type: "spring", stiffness: 120 } },
  show: { x: 0 },
};

const FriendListItem = ({ friend }) => {
  const containerId = friend.id;
  const profileId = `${friend.id}-profile`;
  const nameId = `${friend.id}-name`;
  return (
    <motion.li
      className="friend-item"
      initial="hidden"
      animate="show"
      variants={item}
    >
      <Link to={`friend/${friend.id}`}>
        <motion.article className="friend-card" layoutId={containerId}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            layoutId={profileId}
            className="friend-profile"
            src={friend.src}
          />
          <motion.p className="friend-name" layoutId={nameId}>
            {friend.name}
          </motion.p>
        </motion.article>
      </Link>
    </motion.li>
  );
};

export default FriendListItem;
