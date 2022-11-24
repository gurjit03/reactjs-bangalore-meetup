import { matchPath } from "react-router-dom";

export const getTitle = (url) => {
  if (matchPath({ path: "/friend/:id" }, url)) return "My Friend Details";
  if (matchPath(url, "/")) return "Animated Shared Layout Demo";
  return "";
};
