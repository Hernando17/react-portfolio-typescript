export function Topbar() {
  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="topbar-link">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
