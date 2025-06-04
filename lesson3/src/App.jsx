import React, { useEffect, useState } from "react";
import './App.css'

const API_URL = "https://684062b55b39a8039a57e865.mockapi.io/users";

function RecursiveDisplay({ data }) {
  if (typeof data !== "object" || data === null) {
    return <span>{String(data)}</span>;
  }
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          <strong>{key}: </strong>
          {typeof value === "object" ? (
            <RecursiveDisplay data={value} />
          ) : (
            String(value)
          )}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const handleNameChange = (id, newName) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, name: newName } : user))
    );
  };

  const handleMarriedChange = (id, married) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, married } : user))
    );
  };

  const handleSave = async (user) => {
    try {
      const res = await fetch(`${API_URL}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error("Failed to update");
      const updatedUser = await res.json();
      setUsers((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
      alert("User updated successfully");
    } catch (e) {
      alert("Error updating user: " + e.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Видалити користувача?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (e) {
      alert("Error deleting user: " + e.message);
    }
  };

  if (loading) return <div>Завантаження...</div>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1>Список користувачів</h1>
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleNameChange(user.id, e.target.value)}
            />
          </label>
          <label>
            Married:{" "}
            <input
              type="checkbox"
              checked={user.married || false}
              onChange={(e) => handleMarriedChange(user.id, e.target.checked)}
            />
          </label>

          <div>
            <button onClick={() => handleSave(user)}>Зберегти</button>
            <button onClick={() => handleDelete(user.id)}>Видалити</button>
          </div>

          <details>
            <summary>Повні дані користувача</summary>
            <RecursiveDisplay data={user} />
          </details>
        </div>
      ))}
    </div>
  );
}

export default App;
