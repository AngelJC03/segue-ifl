import './LegacyStudentLedActivitiesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyStudentLedActivitiesBody() {
    return (
        <div className="legacy-student-led-activities-container">
            <div className="legacy-student-led-activities-page-title">
                <h1>Student Led Activities</h1>
            </div>
            <FadeIn>
                <div className="legacy-student-led-activities-content">
                    <p>
                        insert text here
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyStudentLedActivitiesBody;