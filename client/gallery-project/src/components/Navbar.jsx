import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
        <>
        <div className="navbar fixed-top nav navbar-dark">
            <Link to="/" className="navbar-brand">
                Class X-4
            </Link>
            <ul className="nav">
                <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                    Gallery
                </Link>
                </li>
            </ul>
            </div>
        </>
    );
}
