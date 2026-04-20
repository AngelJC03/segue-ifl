// import { React } from 'react';
import './EventsCalendarBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import CenteredFacebookFeed from './CenteredFacebookFeed';
import { useTranslation } from '../../../../hooks/useTranslation';

function EventsCalendarBody() {
    const { t } = useTranslation('news');

    return (
        <div className="events-calendar-container">
            <div className="events-calendar-page-title">
                <h1>{t('eventsCalendar.title')}</h1>
            </div>
            <FadeIn>

                <CenteredFacebookFeed />

                <CenteredLogo />
                
            </FadeIn>
        </div>
    );
}



export default EventsCalendarBody;
