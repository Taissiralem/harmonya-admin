
import { Outlet } from "react-router-dom";
import "./MainLayout.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";


export default function MainLayout() {
  return (
    <div className="mainLayout">
      <Sidebar ></Sidebar>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Navbar />
        <Outlet></Outlet>
      </div>
    </div>
  );
}
