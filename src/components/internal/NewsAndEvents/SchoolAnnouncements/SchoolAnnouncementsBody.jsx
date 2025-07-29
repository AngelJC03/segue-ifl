// import { React } from 'react';
import './SchoolAnnouncementsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function SchoolAnnouncementsBody() {
    return (
            <div className="school-announcements-container">
                <div className="school-announcements-page-title">
                    <h1> School Announcements </h1>
                </div>
                <FadeIn>
                    <p className="school-announcements-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default SchoolAnnouncementsBody;