// import { React } from 'react';
import './LegacySchoolAnnouncementsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacySchoolAnnouncementsBody() {
    return (
            <div className="legacy-school-announcements-container">
                <div className="legacy-school-announcements-page-title">
                    <h1> School Announcements </h1>
                </div>
                <FadeIn>
                    <p className="legacy-school-announcements-content">
                        This page is currently under construction. Please check back later for updates.
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default LegacySchoolAnnouncementsBody;