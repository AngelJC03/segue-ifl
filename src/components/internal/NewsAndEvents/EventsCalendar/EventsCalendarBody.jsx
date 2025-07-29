// import { React } from 'react';
import './EventsCalendarBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function EventsCalendarBody() {
    return (
            <div className="events-calendar-container">
                <div className="events-calendar-page-title">
                    <h1> Events Calendar </h1>
                </div>
                <FadeIn>
                    <p className="events-calendar-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default EventsCalendarBody;