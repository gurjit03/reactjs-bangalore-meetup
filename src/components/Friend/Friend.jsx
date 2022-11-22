import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import friends from "../../data/friends";
import "./style.css";

const Friend = () => {
  const { id: idStr } = useParams();
  const id = Number(idStr);
  const friend = friends.find((f) => f.id === id);

  if (!friend) return <div>No friend found</div>;
  const profileId = `${friend.id}-profile`;
  const nameId = `${friend.id}-name`;
  const containerId = friend.id;
  return (
    <motion.div className="friend-container" layoutId={containerId}>
      <motion.div className="friend-details-container">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="friend-details-profile"
          src={friend.src}
          layoutId={profileId}
        />

        <motion.p className="friend-details-text" layoutId={nameId}>
          {friend.name} - {friend.age}
        </motion.p>
      </motion.div>
      <motion.p
        initial={{ y: "30px", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="friend-details-description"
      >
        {friend.description}
      </motion.p>
    </motion.div>
  );
};

export default Friend;
