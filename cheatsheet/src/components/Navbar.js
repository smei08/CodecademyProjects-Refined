import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== "/" && <Link to="/">Home</Link>}
      {location.pathname !== "/html" && <Link to="/html">HTML</Link>}
      {location.pathname !== "/css" && <Link to="/css">CSS</Link>}
    </nav>
  );
}

export default Navbar;
