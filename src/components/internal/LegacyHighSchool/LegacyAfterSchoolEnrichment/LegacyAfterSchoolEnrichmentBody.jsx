import './LegacyAfterSchoolEnrichmentBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyAfterSchoolEnrichmentBody() {
    return (
        <div className="legacy-after-school-enrichment-container">
            <div className="legacy-after-school-enrichment-page-title">
                <h1>After School Enrichment</h1>
            </div>
            <FadeIn>
                <div className="legacy-after-school-enrichment-content">
                    <p>
                        This page is currently under construction. Please check back later for updates.
                    </p>
                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default LegacyAfterSchoolEnrichmentBody;