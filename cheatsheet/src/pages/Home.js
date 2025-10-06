import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <p>Choose a section to explore:</p>
      <div className="home-links">
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
      </div>
    </div>
  );
}
