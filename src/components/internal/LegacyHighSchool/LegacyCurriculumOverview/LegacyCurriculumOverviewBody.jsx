// import { React } from 'react';
import './LegacyCurriculumOverviewBody.css';
import FadeIn from '../../../fadeinsection/FadeIn'
import CenteredLogo from '../../../CenteredLogo';

function LegacyCurriculumOverviewBody() {
    return (
        <div className="legacy-curriculum-overview-container">
            <div className="legacy-curriculum-overview-page-title">
                <h1> Curriculum Overview </h1>
            </div>
            <FadeIn>
                <div className="legacy-curriculum-overview-content">
                    <p>
                        This page is currently under construction. Please check back later for updates.
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyCurriculumOverviewBody;