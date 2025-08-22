import './LegacyLibraryExpectationsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyLibraryExpectationsBody() {
    return (
        <div className="legacy-library-expectations-container">
            <div className="legacy-library-expectations-page-title">
                <h1> Library Expectations </h1>
            </div>
            <FadeIn>
                <div className="legacy-library-expectations-content">
                    <p>
                        This page is currently under construction. Please check back later for updates.
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyLibraryExpectationsBody;
