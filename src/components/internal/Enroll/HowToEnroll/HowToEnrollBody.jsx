// import { React } from 'react';
import './HowToEnrollBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function HowToEnrollBody() {
    const { t } = useTranslation('enroll');
    const checklist = t('howToEnroll.checklist');
    const step2Items = t('howToEnroll.step2Items');

    return (
        <div className="how-to-enroll-container">
            <div className="how-to-enroll-page-title">
                <h1>{t('howToEnroll.title')}</h1>
            </div>
            <FadeIn>
                <div className="how-to-enroll-content">
                    <p>
                        <strong>{t('howToEnroll.introHeading')}</strong><br />
                        {t('howToEnroll.introBody')}
                    </p>

                    <ul className="enrollment-steps">
                        <li>
                            <strong>{t('howToEnroll.step1Title')}</strong><br />
                            {t('howToEnroll.step1Body')}
                        </li>
                        <li>
                            <strong>{t('howToEnroll.step2Title')}</strong><br />
                            {t('howToEnroll.step2Body')}
                            <ul>
                                {step2Items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <strong>{t('howToEnroll.step3Title')}</strong><br />
                            {t('howToEnroll.step3Body')}
                        </li>
                        <li>
                            <strong>{t('howToEnroll.step4Title')}</strong><br />
                            {t('howToEnroll.step4Body')}
                        </li>
                        <li>
                            <strong>{t('howToEnroll.step5Title')}</strong><br />
                            {t('howToEnroll.step5Body')}
                        </li>
                    </ul>

                    <div className="checklist-section">
                        <h2>✅ {t('howToEnroll.checklistTitle')}</h2>
                        <ul className="checklist">
                            {checklist.map((item) => (
                                <li key={item}>
                                    <label>
                                        <input type="checkbox" /> {item}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default HowToEnrollBody;
