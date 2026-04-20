// import { React } from 'react';
import './FormsAndDeadlinesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function FormsAndDeadlinesBody() {
    const { t } = useTranslation('enroll');
    const requiredItems = t('formsAndDeadlines.requiredItems');

    return (
        <div className="forms-and-deadlines-container">
            <div className="forms-and-deadlines-page-title">
                <h1>{t('formsAndDeadlines.title')}</h1>
            </div>
            <FadeIn>
                <div className="forms-and-deadlines-content">
                    <p>{t('formsAndDeadlines.intro')}</p>

                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>{t('formsAndDeadlines.portalTitle')}:</strong><br />
                            {t('formsAndDeadlines.portalBody')}
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>{t('formsAndDeadlines.windowTitle')}:</strong><br />
                            <strong>{t('formsAndDeadlines.windowOpen')}</strong> {t('formsAndDeadlines.windowOpenValue')}<br />
                            <strong>{t('formsAndDeadlines.windowClose')}</strong> {t('formsAndDeadlines.windowCloseValue')}
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>{t('formsAndDeadlines.drawingTitle')}:</strong><br />
                            {t('formsAndDeadlines.drawingBody')}
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>{t('formsAndDeadlines.postLotteryTitle')}:</strong><br />
                            {t('formsAndDeadlines.postLotteryBody')}
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>{t('formsAndDeadlines.requiredTitle')}:</strong><br />
                            {t('formsAndDeadlines.requiredIntro')}
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '10px' }}>
                                {requiredItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default FormsAndDeadlinesBody;
