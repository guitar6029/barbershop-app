import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="link-item">
        <Link to="/">Home</Link>
      </div>
      <div className="link-item">
        <Link to="/about">About Us</Link>
      </div>
      <div className="link-item">
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className="link-item">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="link-item">
        <Link to="/Blog">Blog</Link>
      </div>
    </nav>
  );
}

export default Nav;
