import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './FacebookFeed.css';

function FacebookFeed() {
    return (
        <section className="facebook-cta-container" aria-labelledby="facebook-cta-heading">
            <div className="facebook-cta-icon" aria-hidden="true">
                <FaFacebookF />
            </div>
            <div className="facebook-cta-copy">
                <h2 id="facebook-cta-heading">Follow Us on Facebook</h2>
                <p>Stay updated with Segue news, events, student highlights, and community announcements.</p>
            </div>
            <a
                className="facebook-cta-button"
                href="https://www.facebook.com/SegueIFL"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Our Facebook Page
            </a>
        </section>
    );
}

export default FacebookFeed;
