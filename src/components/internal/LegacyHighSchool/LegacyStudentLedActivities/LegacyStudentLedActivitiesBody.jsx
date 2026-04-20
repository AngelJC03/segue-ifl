import './LegacyStudentLedActivitiesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyStudentLedActivitiesBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-student-led-activities-container">
            <div className="legacy-student-led-activities-page-title">
                <h1>{t('studentLedActivities.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-student-led-activities-content">
                    <p>{t('studentLedActivities.body')}</p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyStudentLedActivitiesBody;
