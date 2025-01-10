import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/SidebarLinks.js";

import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar component

import { useTranslation } from "react-i18next"; // Import useTranslation

import "./Navbar.css";

const Navbar: React.FC = () => {
  const { t} = useTranslation(); // Use the translation hook
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const matchingLink = sidebarLinks.find((link) => link.path === currentPath);



  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !(formRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);



  return (
    <>
      <div className="navbar">

        <h2 className="navbar-title">
          {t(matchingLink?.label) || window.location.pathname.split("/")[1]}
        </h2>

      </div>
      <Sidebar
        isVisible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};

export default Navbar;
