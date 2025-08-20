// import { React } from 'react';
import './CurriculumOverviewBody.css';
import FadeIn from '../../../fadeinsection/FadeIn'
import CenteredLogo from '../../../CenteredLogo';

function CurriculumOverviewBody() {
    return (
            <div className="curriculum-overview-container">
                <div className="curriculum-overview-page-title">
                    <h1> Curriculum Overview </h1>
                </div>
                <FadeIn>
                    <p className="curriculum-overview-content">
                        Our curriculum is designed to challenge, inspire, and support all learners. We focus on literacy, math, science, and social
studies, while integrating critical thinking, problem-solving, and effective communication across all content areas.
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default CurriculumOverviewBody;