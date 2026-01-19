import { FaHome, FaCalendarAlt, FaDoorOpen, FaCog, FaSignOutAlt } from "react-icons/fa";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu-items">
        <li><FaHome className="icon" /> Dashboard</li>
        <li><FaCalendarAlt className="icon" /> Schedules</li>
        <li><FaDoorOpen className="icon" /> Rooms</li>
        <li><FaCog className="icon" /> Settings</li>
      </ul>

      <div className="Logout"><FaSignOutAlt className="icon" /> Logout</div>
    </div>
  );
}

export default Sidebar;
