import { FaCalendarAlt, FaEllipsisV } from "react-icons/fa";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

export default function Magasin() {
  const tableHeaders = [
    "Nom du Magasin",
    "Téléphone",
    "Email",
    "Nom du G",
    "Téléphone du G",
    "Email G",
    "Localistaion",
    "Nombre du service",
    "Total reservation",
    "Gain totale",
    "Abonnement",
    "Boost",
    "Boost restant",
    "Status",
    "Action",
  ];

  const tableData = [
    [
      { text: "coifurama" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Maps" },
      { text: "10" },
      { text: "10" },
      { text: "1000,000DZD" },
      { text: "Gold" },
      { text: "32" },
      { text: "2" },
      { text: "Client normal" },

      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "coifurama" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Maps" },
      { text: "10" },
      { text: "10" },
      { text: "1000,000DZD" },
      { text: "Gold" },
      { text: "32" },
      { text: "2" },
      { text: "Client normal" },

      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "coifurama" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Maps" },
      { text: "10" },
      { text: "10" },
      { text: "1000,000DZD" },
      { text: "Gold" },
      { text: "32" },
      { text: "2" },
      { text: "Client normal" },

      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "coifurama" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Maps" },
      { text: "10" },
      { text: "10" },
      { text: "1000,000DZD" },
      { text: "Gold" },
      { text: "32" },
      { text: "2" },
      { text: "Client normal" },

      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "coifurama" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Maps" },
      { text: "10" },
      { text: "10" },
      { text: "1000,000DZD" },
      { text: "Gold" },
      { text: "32" },
      { text: "2" },
      { text: "Client normal" },

      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
  ];

  const actions = [
    {
      text: "Voir les détails",
      icon: FaCalendarAlt,
      onClick: (id: any) => console.log(`Viewing details for ${id}`),
    },
    {
      text: "Annuler la réservation",
      icon: FaEllipsisV,
      onClick: (id: any) => console.log(`Cancelling reservation ${id}`),
    },
  ];

  const navigate = useNavigate();

  return (
    <main className="user">
      <Table
        title="Liste des demandes de pub"
        search={true}
        tr={tableHeaders}
        td={tableData}
        action={actions}
      ></Table>
      <div className="add-category">
        <button onClick={() => navigate("/multi-step-form")}>
          Ajouter une Pub
        </button>
      </div>
    </main>
  );
}
