import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  // Don't render a navbar on the Home page
  if (pathname === "/") return null;

  return (
    <nav className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link to="/html">HTML</Link>
      <Link to="/css">CSS</Link>
    </nav>
  );
}
