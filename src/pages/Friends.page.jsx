import React from "react";
import { ScrollRestoration } from "react-router-dom";
import { Friend } from "../components";

const FriendsPage = () => {
  return (
    <>
      <Friend />
      <ScrollRestoration />
    </>
  );
};

export default FriendsPage;
