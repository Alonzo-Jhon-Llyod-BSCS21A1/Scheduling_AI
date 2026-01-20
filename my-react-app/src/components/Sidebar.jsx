import { FaHome, FaCalendarAlt, FaDoorOpen, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu-items">
        <li onClick={() => navigate("/dashboard")}>
          <FaHome className="icon" /> Dashboard
        </li>
        <li onClick={() => navigate("/schedules")}>
          <FaCalendarAlt className="icon" /> Schedules
        </li>
        <li onClick={() => navigate("/rooms")}>
          <FaDoorOpen className="icon" /> Rooms
        </li>
        <li onClick={() => navigate("/settings")}>
          <FaCog className="icon" /> Settings
        </li>
      </ul>

      <div
        className="logout"
        onClick={() => {
          localStorage.removeItem("isAuth");
          navigate("/login");
        }}
      >
        <FaSignOutAlt className="icon" /> Logout
      </div>
    </div>
  );
}

export default Sidebar;
