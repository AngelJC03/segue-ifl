// import react from 'react';
import './Footer.css'; // Import the footer CSS
import { Link } from 'react-router-dom';
import SegueLogo from '../../assets/images/logo-photos/temp-segue-logo.png'; // Import the logo image
import AmeriCorpsLogo from '../../assets/images/logo-photos/AmeriCorps-logo.png'; // Import the AmeriCorps logo
import LegacyHSLogo from '../../assets/images/logo-photos/LegacyHighSchool-logo.jpg'; // Import the Legacy HS logo

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <div className="footer-logo">
                    <Link to="/" className="footer-segue-logo">
                        <img src={SegueLogo} alt="Segue Logo" className="footer-segue-logo" />
                    </Link>
                    <Link to="/" className="footer-americorps-logo">
                        <img src={AmeriCorpsLogo} alt="AmeriCorps Logo" className="footer-americorps-logo" />
                    </Link>
                </div>
                <div className="footer-contacts">
                    <h1>Contact Us</h1>
                    <p><a href="mailto:example@example.com">Angelo.Garcia@segueifl.org</a></p>
                    <p><a href="tel:+1234567890">+1 (401) 721-0964</a></p>
                    <p>
                        Address: <a href="https://www.google.com/maps/search/?api=1&query=325+Cowden+St,+Central+Falls,+RI+02863" target="_blank" rel="noopener">325 Cowden St, Central Falls, RI 02863 </a>
                    </p>
                    <p>Follow us on social media:</p>
                </div>
                <div className="footer-schools-list">
                    <h1>Schools</h1>
                    <p><a href="https://segueifl.org">Segue IFL</a></p>
                    <p><a href="/">Legacy Schools</a></p>
                    <Link to="/schools" className="footer-legacyhs-logo">
                        <img src={LegacyHSLogo} alt="Legacy High School Logo" className="footer-legacyhs-logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;