// import { React } from 'react';
import './AcademicCalendarBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import academicCalendarImage from '../../../../assets/images/academic-calendar-photos/calendar.jpg';
import calendarPDF from '../../../../assets/images/academic-calendar-photos/calendarPDF.pdf';

function AcademicCalendarBody() {
    return (
            <div className="academic-calendar-container">
                <div className="academic-calendar-page-title">
                    <h1> Academic Calendar </h1>
                </div>
                <FadeIn>
                    <div className="academic-calendar-content">
                        <p>
                            This calendar provides important school dates, events, and holidays for the year. 
                            <br/>
                            Stay updated with key academic dates and upcoming school activities.
                        </p>
                        <div className="academic-calendar-image-container"> 
                            <img src={academicCalendarImage} alt="Academic Calendar" className="academic-calendar-image"/>
                        </div>
                         <p>
                            <a href={calendarPDF} target="_blank" rel="noopener noreferrer">
                                View Full Calendar (PDF)
                            </a>
                        </p>
                    </div>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default AcademicCalendarBody;