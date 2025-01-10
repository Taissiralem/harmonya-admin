import { FaCalendarAlt, FaEllipsisV } from "react-icons/fa";
import CountCards from "../../components/CountCards/CountCards";
import Table from "../../components/Table/Table";

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
    ], [
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
    ], [
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
    ], [
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

  return (
    <main className="user">
      <div className="count-cards-container">
        <CountCards
          title="Nouvelles Réservations"
          count={20}
          flexx={true}
        ></CountCards>

        <CountCards
          title="Nouvelles Réservations"
          count={20}
          flexx={false}
        ></CountCards>
        <CountCards
          title="Total des Réservations"
          count={20}
          flexx={false}
        ></CountCards>
        <CountCards title="Total clients" count={20}
          flexx={false}></CountCards>
        <CountCards
          title="Réservations annulées"
          count={20}
          flexx={false}
        ></CountCards>
      </div>
      <Table
        title="List des Magasins :"
        search={true}
        tr={tableHeaders}
        td={tableData}
        action={actions}
      ></Table>
    </main>
  )
}