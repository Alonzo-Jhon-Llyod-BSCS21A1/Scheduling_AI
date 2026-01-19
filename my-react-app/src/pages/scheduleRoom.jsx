import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function ScheduleRoom() {
  const [schedules, setSchedules] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/schedules")
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, []);

  return (
    <div className="schedule-page">
      <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar isOpen={menuOpen} />

      <div className={`schedule-content ${menuOpen ? "shift" : ""}`}>
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
    </div>
  );
}

export default ScheduleRoom;
