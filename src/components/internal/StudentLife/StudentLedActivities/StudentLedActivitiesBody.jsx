import './StudentLedActivitiesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function StudentLedActivitiesBody() {
    return (
        <div className="student-led-activities-container">
            <div className="student-led-activities-page-title">
                <h1>Student Led Activities</h1>
            </div>
            <FadeIn>
                <div className="student-led-activities-content">
                    <p>
                        Student voice is central to our culture. Whether it’s leading a station in gym class, helping plan a spirit week, or presenting a project to the school community, Segue scholars are empowered to lead with confidence.
                    </p>
                    <p>We provide structured opportunities for students to:</p>
                    <ul className="student-led-list">
                        <strong>
                            <li>Design and teach mini-lessons</li>
                            <li>Host exhibitions or clubs</li>
                            <li>Collaborate on school improvement ideas</li>
                            <li>Mentor younger scholars</li>
                        </strong>
                    </ul>
                    <p>
                        These moments build ownership and agency—key skills for high school, college, and beyond.
                    </p>
                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default StudentLedActivitiesBody;
