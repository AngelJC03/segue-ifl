// import { React } from 'react';
import './EligibilitBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function EligibilityBody() {
    return (
            <div className="eligibility-container">
                <div className="eligibility-page-title">
                    <h1> Eligibility </h1>
                </div>
                <FadeIn>
                    <p className="eligibility-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default EligibilityBody;