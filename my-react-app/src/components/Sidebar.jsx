function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>Dashboard</li>
        <li>Schedules</li>
        <li>Rooms</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
