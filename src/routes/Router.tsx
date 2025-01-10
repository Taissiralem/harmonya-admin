import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import General from "../pages/General/General";
import User from "../pages/User/User";
import Magasin from "../pages/Magasin/Magasin";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "general", element: <General /> },
      { path: "users", element: <User /> },
      { path: "magasins", element: <Magasin /> },

    ],
  },
  { path: "login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default Router;
