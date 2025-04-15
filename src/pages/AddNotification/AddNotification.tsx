import React, { useState } from "react";
import "./AddNotification.css";

type Notification = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export default function AddNotification() {
  const [title, setTitle] = useState("");
  const [audience, setAudience] = useState("Tout le monde");
  const [description, setDescription] = useState("");
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "a1c74", title: "test", description: "test", date: "07/04/2025" },
    {
      id: "2b3fb",
      title: "testing",
      description: "this is a test notification",
      date: "07/04/2025",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newNotification: Notification = {
      id: Math.random().toString(36).substring(2, 7),
      title,
      description,
      date: new Date().toLocaleDateString("fr-FR"),
    };

    setNotifications([newNotification, ...notifications]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="notification-container">

      <form className="notification-form" onSubmit={handleSubmit}>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Choisir un public :</label>
        <select value={audience} onChange={(e) => setAudience(e.target.value)}>
          <option>Tout le monde</option>
        </select>

        <label>Description :</label>
        <textarea

          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Envoyer</button>
      </form>

      <table className="notification-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.id}</td>
              <td>{notification.title}</td>
              <td>{notification.description}</td>
              <td>{notification.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
