import { Link } from "react-router-dom";
import './footerComponent.css';

function Footer() {
    return (
        <div className="p">
            <div className="containeur">
                <div className="row justify-content-center footer1">
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>John Doe</h6>
                        <p>
                            40 Rue Laure Diebold <br />
                            69009 Lyon, France<br />
                            Téléphone : 06 20 30 40 50
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Liens utiles</h6>
                        <ul className="list">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/About">À propos de</Link></li>
                            <li><Link to="/Services">Prestations de service</Link></li>
                            <li><Link to="/Contact">Me contacter</Link></li>
                            <li><Link to="/legal-mention">Mentions légales</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes dernières réalisations</h6>
                        <ul>
                            <li>Fresh food</li>
                            <li>Restaurant Akira</li>
                            <li>Espace bien-être</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <h6>Mes derniers articles</h6>
                        <ul>
                            <li>Coder son site en HTML/CSS</li>
                            <li>Vendre ses produits sur le web</li>
                            <li>Se positionner sur Google</li>
                        </ul>
                    </div>
                </div>
                <div className="footer2">
                    <p>Designed by John Doe</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
