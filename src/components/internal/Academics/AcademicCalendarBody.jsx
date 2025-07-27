// import { React } from 'react';
import './AcademicCalendarBody.css';
import FadeIn from '../../fadeinsection/FadeIn';
import CenteredLogo from '../../CenteredLogo';

function AcademicCalendarBody() {
    return (
            <div className="academic-calendar-container">
                <div className="academic-calendar-page-title">
                    <h1> Academic Calendar </h1>
                </div>
                <FadeIn>
                    <p className="academic-calendar-content">
                        Coming Soon. Our academic calendar will be posted prior to the start of the 2025–2026 school year. Please check back
                        soon for key dates, holidays, and early dismissal schedules.
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default AcademicCalendarBody;