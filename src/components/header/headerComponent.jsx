
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-4">
        <a className="navbar-brand" href="/">JOHN DOE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/">ACCUEIL</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Services">SERVICES</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Realisations">REALISATION</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Blogs">BLOG</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Contact">ME CONTACTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
