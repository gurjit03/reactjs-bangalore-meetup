import { createBrowserRouter } from "react-router-dom";
import { FriendsPage, FriendsListPage } from "./pages";
import { Layout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/friend/:id",
        element: <FriendsPage />
      },
      {
        path: "/",
        element: <FriendsListPage />
      }
    ]
  }
]);

export default router;
