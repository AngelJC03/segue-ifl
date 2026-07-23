import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './CenteredFacebookFeed.css';
import { useTranslation } from '../../../../hooks/useTranslation';

function CenteredFacebookFeed() {
    const { t } = useTranslation('news');

    return (
        <section className="centered-fb-cta-container" aria-labelledby="centered-fb-cta-heading">
            <div className="centered-fb-cta-icon" aria-hidden="true">
                <FaFacebookF />
            </div>
            <h2 id="centered-fb-cta-heading">{t('eventsCalendar.facebookCtaHeading')}</h2>
            <p>{t('eventsCalendar.facebookCtaText')}</p>
            <a
                href="https://www.facebook.com/SegueIFL"
                target="_blank"
                rel="noopener noreferrer"
                className="centered-fb-cta-button"
            >
                {t('eventsCalendar.facebookCtaButton')}
            </a>
        </section>
    );
}

export default CenteredFacebookFeed;
