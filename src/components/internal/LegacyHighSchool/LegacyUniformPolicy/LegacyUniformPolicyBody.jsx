import './LegacyUniformPolicyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyUniformPolicyBody() {
    return (
        <div className="legacy-uniform-policy-container">
            <div className="legacy-uniform-policy-page-title">
                <h1>Uniform Policy</h1>
            </div>
            <FadeIn>
                <div className="legacy-uniform-policy-content">
                    <p>
                        This page is currently under construction. Please check back later for updates.
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyUniformPolicyBody;
