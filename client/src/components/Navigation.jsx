import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/timer">Timer</Link>
      <Link to="/box/red">Red Box</Link>
      <Link to="/box/green">Green Box</Link>
    </nav>
  );
}

export default Navigation;
