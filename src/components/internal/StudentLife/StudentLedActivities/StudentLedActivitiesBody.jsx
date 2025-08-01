import './StudentLedActivitiesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function StudentLedActivitiesBody() {
    return (
        <div className="student-led-activities-container">
            <div className="student-led-activities-page-title">
                <h1> Student Led Activities </h1>
            </div>
            <FadeIn>
                <p className="student-led-activities-content">

                </p>
                <CenteredLogo />
            </FadeIn>
        </div>
    )
}

export default StudentLedActivitiesBody;
