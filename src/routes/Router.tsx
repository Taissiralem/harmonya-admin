import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const Router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default Router;
