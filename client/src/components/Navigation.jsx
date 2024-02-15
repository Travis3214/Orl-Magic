import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Roster">Roster</Link>
      </li>
      <li>
        <Link to="/Schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </ul>
  );
}

export default Navigation;