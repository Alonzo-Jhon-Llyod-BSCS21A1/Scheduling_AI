import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function ScheduleRoom() {
  const [schedules, setSchedules] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // form modal
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const res = await fetch("http://localhost:3001/schedules");
    const data = await res.json();
    setSchedules(data);
  };

  const handleAddSchedule = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, time }),
    });

    setShowModal(false);
    setTitle("");
    setDate("");
    setTime("");
    fetchSchedules();
  };

  return (
    <div className="schedule-page">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar isOpen={menuOpen} />

      <div className={`schedule-content ${menuOpen ? "shift" : ""}`}>
        <div className="schedule-card">
          <div className="card-header">
            <h2>Schedules</h2>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <FaPlus /> Add
            </button>
          </div>

          {schedules.length === 0 ? (
            <p className="empty-text">No schedules yet.</p>
          ) : (
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.title}</td>
                    <td>{s.date}</td>
                    <td>{s.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Modal for adding schedule */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Add Schedule</h3>
              <form onSubmit={handleAddSchedule}>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <button type="submit">Add</button>
                  <button type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduleRoom;
