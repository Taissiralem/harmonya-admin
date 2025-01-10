import { FaCalendarAlt, FaEllipsisV } from "react-icons/fa";
import CountCards from "../../components/CountCards/CountCards"
import "./User.css"
import Table from "../../components/Table/Table";
export default function User() {
  const tableHeaders = [
    "Nom du client",
    "Téléphone",
    "Email",
    "Service",
    "Date",
    "Status du client",
    "R/T",
    "R/A",
    "Action",
  ];

  const tableData = [
    [
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },


      { text: "Client normal" },
      { text: "10" },
      { text: "10" },
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
      { text: "Mahmoud Wassim" },
      { text: "+213 554 96 93 57" },
      { text: "mahmoud@gmail.com" },
      { text: "Coiffure femme" },
      { text: "24 Déc 2024" },


      { text: "VIP" },
      { text: "10" },
      { text: "10" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/2",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "Taissir" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },


      { text: "Client normal" },
      { text: "10" },
      { text: "10" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/3",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "Lalout Mehdi" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },


      { text: "Blacklisted" },
      { text: "10" },
      { text: "10" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/4",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "Mehdi Bensalem" },
      { text: "+213 664 77 22 33" },
      { text: "mehdi.bensalem@gmail.com" },
      { text: "Coiffure homme" },
      { text: "25 Déc 2024" },


      { text: "VIP" },
      { text: "10" },
      { text: "10" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/5",
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
        ></CountCards>
        <CountCards
          title="Nouvelles Réservations"
          count={20}
        ></CountCards>
        <CountCards
          title="Nouvelles Réservations"
          count={20}
        ></CountCards>
        <CountCards
          title="Total des Réservations"
          count={20}
        ></CountCards>
        <CountCards title="Total clients" count={20}></CountCards>
        <CountCards
          title="Réservations annulées"
          count={20}
        ></CountCards>
      </div>
      <Table
        title="List des client :"
        search={true}
        tr={tableHeaders}
        td={tableData}
        action={actions}
      ></Table>
    </main>
  )
}