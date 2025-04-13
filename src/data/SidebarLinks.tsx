import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { PiMedal } from "react-icons/pi";
import { SidebarLink } from "../types/SidebarLink";

export const sidebarLinks: SidebarLink[] = [
  { section: "Statistiques" },
  { label: "general", path: "/general", icon: <FaHome size={20} /> },
  { label: "Users", path: "/users", icon: <MdDashboard size={20} /> },
  { label: "Magasins", path: "/magasins", icon: <IoMdStats size={20} /> },

  { section: "Abonnements" },
  { label: "Boosts", path: "/boosts", icon: <FaCalendarAlt size={20} /> },
  {
    label: "Abonnements",
    path: "/abonnements",
    icon: <LiaPencilRulerSolid size={26} />,
    customStyle: {
      paddingLeft: "0",
      gap: "10px",
      transform: "translateX(-3px)",
    },
  },
  { section: "Publicités" },
  {
    label: "Pub et pub mobile",
    path: "/Pubs",
    icon: <LiaPencilRulerSolid size={26} />,
    customStyle: {
      paddingLeft: "0",
      gap: "10px",
      transform: "translateX(-3px)",
    },
  },

  { section: "Paramètres" },
  {
    label: "Catégories & sous-catégories",
    path: "/categories",
    icon: <PiMedal size={24} />,
    customStyle: { paddingLeft: "0", gap: "13px" },
  },
  {
    label: "Newsletter",
    path: "/newsletter",
    icon: <HiOutlineBookOpen size={20} />,
  },
  {
    label: "Push notifications",
    path: "/addNotifications",
    icon: <BsSuitcaseLg size={20} />,
  },
];
