// import { React } from 'react';
import './HowToEnrollBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function HowToEnrollBody() {
    return (
        <div className="how-to-enroll-container">
            <div className="how-to-enroll-page-title">
                <h1> How to Enroll </h1>
            </div>
            <FadeIn>
                <div className="how-to-enroll-content">
                    <p>
                        <strong>Interested in joining the Segue community?</strong><br />
                        Visit this page for enrollment forms, eligibility details, deadlines, and application requirements.
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default HowToEnrollBody;
