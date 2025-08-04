// import { React } from 'react';
import './EventsCalendarBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import CenteredFacebookFeed from './CenteredFacebookFeed';

function EventsCalendarBody() {
    return (
        <div className="events-calendar-container">
            <div className="events-calendar-page-title">
                <h1> Events Calendar </h1>
            </div>
            <FadeIn>

                <CenteredFacebookFeed />

                <CenteredLogo />
                
            </FadeIn>
        </div>
    );
}



export default EventsCalendarBody;