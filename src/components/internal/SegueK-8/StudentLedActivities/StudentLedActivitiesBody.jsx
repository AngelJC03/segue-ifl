import './StudentLedActivitiesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function StudentLedActivitiesBody() {
    const { t } = useTranslation('segueK8');
    const items = t('studentLedActivities.items');

    return (
        <div className="student-led-activities-container">
            <div className="student-led-activities-page-title">
                <h1>{t('studentLedActivities.title')}</h1>
            </div>
            <FadeIn>
                <div className="student-led-activities-content">
                    <p>{t('studentLedActivities.intro')}</p>
                    <p>{t('studentLedActivities.listIntro')}</p>
                    <ul className="student-led-list">
                        <strong>
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </strong>
                    </ul>
                    <p>{t('studentLedActivities.outro')}</p>
                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default StudentLedActivitiesBody;
