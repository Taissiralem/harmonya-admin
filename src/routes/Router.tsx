import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import General from "../pages/General/General";
import User from "../pages/User/User";
import Magasin from "../pages/Magasin/Magasin";
import Boosts from "../pages/Boosts/Boosts";
import Pubs from "../pages/Pubs/Pubs";
import MultiStepForm from "../pages/MultiStepForm/MultiStepForm";
import Categories from "../pages/Categories/Categories";
import Addcategory from "../pages/AddCategorie/AddCategories";
import AddSousCategorie from "../pages/AddSousCategorie/AddSousCategorie";
import AddNotification from "../pages/AddNotification/AddNotification";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "general", element: <General /> },
      { path: "users", element: <User /> },
      { path: "magasins", element: <Magasin /> },
      { path: "boosts", element: <Boosts /> },
      { path: "Pubs", element: <Pubs /> },
      { path: "categories", element: <Categories /> },
      { path: "addNotifications", element: <AddNotification /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "*", element: <NotFound /> },
  { path: "multi-step-form", element: <MultiStepForm /> },
  { path: "addcategory", element: <Addcategory /> },
  { path: "addsubcategory", element: <AddSousCategorie /> },
]);

export default Router;
