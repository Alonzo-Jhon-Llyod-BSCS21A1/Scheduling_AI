function Header({ toggleMenu }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1 className="header-title">SCHEDULING ROOM</h1>
      </div>

      <div className="header-line"></div>
    </header>
  );
}

export default Header;
