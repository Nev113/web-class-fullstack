import Navbar from "../components/Navbar.jsx"
import { Link } from "react-router-dom"
import "./Admin.css"
import { Helmet } from "react-helmet";
import validationPage from "../components/cookie-user.js";

export default function Admin() {
    const user = validationPage();
    if (!user) {
        window.location.href = "/login";
    }
    return (
        <>
        <Helmet>
            <title>Admin</title>
        </Helmet>
        <Navbar />
        <div className="container main">
            <h1 className="text-center">Admin Pages</h1>
            <h2 className="mt-5 text-center">Choose your CRUD operation</h2>
            <div className="text-center menu">
                 <ul className="nav">
                <li className="nav-item"><Link className="nav-link" to="/admin/add">Add</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/rud">Delete</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin/logout">Logout</Link></li>
            </ul>
            </div>
        </div>
        </>
    )
}