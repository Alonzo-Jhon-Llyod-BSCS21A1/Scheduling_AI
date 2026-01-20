import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import "../App.css"; // make sure this points to your CSS file

function Dashboard() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const res = await fetch("http://localhost:3001/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("✅ Teacher added!");
      setName("");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <FaUserPlus size={50} color="#FFD500" />
        <h2>Add Teacher</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Teacher Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">
            Add Teacher
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Dashboard;
