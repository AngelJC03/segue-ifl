import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './FacebookFeed.css';
import { useTranslation } from '../../hooks/useTranslation';

function FacebookFeed() {
    const { t } = useTranslation('home');

    return (
        <section className="facebook-cta-container" aria-labelledby="facebook-cta-heading">
            <div className="facebook-cta-icon" aria-hidden="true">
                <FaFacebookF />
            </div>
            <div className="facebook-cta-copy">
                <h2 id="facebook-cta-heading">{t('facebook.heading')}</h2>
                <p>{t('facebook.description')}</p>
            </div>
            <a
                className="facebook-cta-button"
                href="https://www.facebook.com/SegueIFL"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('facebook.button')}
            </a>
        </section>
    );
}

export default FacebookFeed;
