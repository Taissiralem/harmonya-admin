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
  { section: "Statistique" },
  { label: "general", path: "/general", icon: <FaHome size={20} /> },
  { label: "Users", path: "/users", icon: <MdDashboard size={20} /> },
  { label: "Magasins", path: "/magasins", icon: <IoMdStats size={20} /> },

  { section: "Abonnement" },
  { label: "Boost", path: "/boost", icon: <FaCalendarAlt size={20} /> },
  {
    label: "Abonnement",
    path: "/abonnement",
    icon: <LiaPencilRulerSolid size={26} />,
    customStyle: {
      paddingLeft: "0",
      gap: "10px",
      transform: "translateX(-3px)",
    },
  },
  { section: "Publicité" },


  { section: "Paramètre" },
  {
    label: "Catégorie",
    path: "/categorie",
    icon: <PiMedal size={24} />,
    customStyle: { paddingLeft: "0", gap: "13px" },
  },
  {
    label: "Sous Catégorie",
    path: "/sousCategorie",
    icon: <PiMedal size={24} />,
    customStyle: { paddingLeft: "0", gap: "13px" },
  },
  {
    label: "Newsletter",
    path: "/newsletter",
    icon: <HiOutlineBookOpen size={20} />,
  },
  {
    label: "Push notification",
    path: "/addNotification",
    icon: <BsSuitcaseLg size={20} />,
  },
];
