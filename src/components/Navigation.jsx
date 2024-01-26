import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="navbar">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/Roster">Roster</Link>
      </li>
      <li className="item">
        <Link to="/Schedule">Schedule</Link>
      </li>
      <li className="item">
        <Link to="/Login">Login</Link>
      </li>
    </ul>
  );
}

export default Navigation;
