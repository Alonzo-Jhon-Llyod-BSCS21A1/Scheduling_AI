import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // make sure this points to your CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // VERY IMPORTANT

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        navigate("/schedule-room");
      } else {
        alert("Incorrect username or password");
      }
    } catch (error) {
      alert("Server error");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h1 className="title">SCHEDULING SYSTEM</h1>

        {/* FORM WRAPPER MAKES ENTER KEY WORK */}
        <form onSubmit={handleLogin}>
          <label className="label">Admin Account:</label>
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="label">Password:</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br></br>

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
