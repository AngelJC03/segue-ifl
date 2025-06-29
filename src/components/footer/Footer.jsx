// import react from 'react';
import './Footer.css'; // Import the footer CSS
import { Link } from 'react-router-dom';
import image from '../../assets/images/logo-photos/temp-segue-logo.png'; // Import the logo image

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <div className="footer-logo">
                    <Link to="/" className="footer-logo-link">
                        <img src={image} alt="Segue Logo" className="footer-logo-image" />
                    </Link>
                </div>
                <div className="footer-contacts">
                    <h1>Contact Us</h1>
                    <p>Email: email@segueifl.org</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Segue St, City, State, ZIP</p>
                    <p>Follow us on social media:</p>
                </div>
                <div className="footer-schools-list">
                    <p>Segue IFL</p>
                    <p>legacy Schools</p>
                    <p>high school</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;