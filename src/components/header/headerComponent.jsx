import { Link, Route, Routes } from "react-router-dom";
import "./headerComponent.css";
import HomePage from '../../pages/Home/homePage';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-light text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-light" href="#page-top">John Doe</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbarResponsive">
                    <ul id="ulnav" className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Accueil</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/realisation">Réalisation</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/blogs">Blogs</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/services">Services</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar