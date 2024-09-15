ReactDOM.render(
  <div>
    <Navbar />

    <div className="content">
      <h4>Why React?</h4>
      <ul>
        <li>Highest demand</li>
        <li>Largest ecosystem</li>
        <li>Less "magic"</li>
        <li>Composable / Declarative</li>
        <li>Active development</li>
      </ul>
    </div>
  </div>,
  document.getElementById("root"),
);

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Navbar</h1>
      <p className="navbar-link">|||</p>
    </nav>
  );
}
