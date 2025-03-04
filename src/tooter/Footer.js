import { Link } from "react-router-dom";
import "./Footer.css"; // Assurez-vous d'ajouter un fichier CSS pour le style

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Votre plateforme de billetterie pour les meilleurs concerts et matches.</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/concerts">Concerts</Link></li>
            <li><Link to="/matchs">Matchs</Link></li>
            <li><Link to="/contact">about us </Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : support@billetterie.com</p>
          <p>Téléphone : +212 6 00 00 00 00</p>
        </div>
      </div>

      <p className="copyright">© 2025 Billetterie. Tous droits réservés.</p>
    </footer>
  );
}
