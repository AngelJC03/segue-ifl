// import react from 'react';
import './Footer.css'; // Import the footer CSS
import { Link } from 'react-router-dom';
import SegueLogo from '../../assets/images/logo-photos/temp-segue-logo.png'; // Import the logo image
import LegacyHSLogo from '../../assets/images/logo-photos/LegacyHighSchool-logo.jpg'; // Import the Legacy HS logo
import facebookIcon from '../../assets/images/footer-photos/icons8-facebook-48.png'; // Import the Facebook icon

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <div className="footer-contacts">
                    <h1>Contact Us</h1>
                    <p><strong>Segue Institute for Learning</strong></p>
                    <p>
                        Address: <a href="https://www.google.com/maps/search/?api=1&query=325+Cowden+St,+Central+Falls,+RI+02863" target="_blank" rel="noreferrer">
                            325 Cowden Street, Central Falls, RI 02863
                        </a>
                    </p>
                    <p>Phone: <a href="tel:+14017210964">(401) 721-0964</a></p>
                    <p>Fax: (401) 721-0984</p>
                    <p>
                        Website: <a href="https://www.segueifl.org" target="_blank" rel="noreferrer">www.segueifl.org</a>
                    </p>
                    <p>
                        Email: <a href="mailto:information@segueifl.org">information@segueifl.org</a>
                    </p>
                    <p>Follow us on social media:</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/SegueIFL" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="Facebook Icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-logo">
                    <Link to="/" className="footer-segue-logo">
                        <img src={SegueLogo} alt="Segue Logo" className="footer-segue-logo" />
                    </Link>
                    <Link to="/schools" className="footer-legacyhs-logo">
                        <img src={LegacyHSLogo} alt="Legacy High School Logo" className="footer-legacyhs-logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
