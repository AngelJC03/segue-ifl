// import { React } from 'react';
import './SeguePledgeBody.css';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import image from '../../../../assets/images/logo-photos/temp-segue-logo.png'; // Adjust the path as necessary
import { useTranslation } from '../../../../hooks/useTranslation';

function SeguePledgeBody() {
    const { t } = useTranslation('about');
    const lines = t('seguePledge.lines');

    return (
            <div className="segue-pledge-container">
                <div className="segue-pledge-page-title">
                    <h1>{t('seguePledge.pageTitle')}</h1>
                </div>
                <FadeIn>
                <img src={image} alt={t('seguePledge.logoAlt')} className="segue-pledge-logo" />
                <h1 className="segue-pledge-title">{t('seguePledge.title')}</h1>
                <p className="segue-pledge-text">
                    {lines.map((line) => (
                        <span key={line}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                </FadeIn>
            </div>
    )

}

export default SeguePledgeBody;
