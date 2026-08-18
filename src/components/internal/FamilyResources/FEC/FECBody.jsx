// import { React } from 'react';
import './FECBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import FECenglish from '../../../../assets/images/FECPhotos/FECenglish.jpg';
import FECspanish from '../../../../assets/images/FECPhotos/FECspanish.jpg';
import { useLanguage } from '../../../../hooks/useLanguage';
import { useTranslation } from '../../../../hooks/useTranslation';

function FECBody() {
    const { language } = useLanguage();
    const { t } = useTranslation('familyResources');
    const contacts = t('familyEngagementCommittee.contacts');
    const flyer = language === 'es' ? FECspanish : FECenglish;

    return (
        <div className="fec-container">
            <div className="fec-page-title">
                <h1>{t('familyEngagementCommittee.title')}</h1>
            </div>
            <FadeIn>
                <div className="fec-content">
                    <p>{t('familyEngagementCommittee.description')}</p>
                    <img src={flyer} alt={t('familyEngagementCommittee.flyerAlt')} className="fec-image" />
                    <h1>{t('familyEngagementCommittee.contactTitle')}:</h1>
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.email}>
                                <strong>{contact.name}</strong> - {contact.role}: <a href={`mailto:${contact.email}`}>{t('familyEngagementCommittee.emailLink')}</a>
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    );
}

export default FECBody;
