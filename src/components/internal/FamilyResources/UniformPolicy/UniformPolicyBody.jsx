// import { React } from 'react';
import './UniformPolicyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function UniformPolicyBody() {
    return (
            <div className="uniform-policy-container">
                <div className="uniform-policy-page-title">
                    <h1> Uniform Policy </h1>
                </div>
                <FadeIn>
                    <p className="uniform-policy-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default UniformPolicyBody;