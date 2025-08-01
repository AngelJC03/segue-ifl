import './AfterSchoolEnrichmentBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function AfterSchoolEnrichmentBody() {
    return (
        <div className="after-school-enrichment-container">
            <div className="after-school-enrichment-page-title">
                <h1>After School Enrichment</h1>
            </div>
            <FadeIn>
                <div className="after-school-enrichment-content">
                    <p>
                        Our afterschool programs expand learning through curiosity-driven, hands-on experiences. Sessions change seasonally and include partnerships with beloved local organizations such as:
                    </p>

                    <ul className="enrichment-list">
                        <li>
                            <strong>Roger Williams Zoo</strong>
                            <ul>
                                <li>K–1 students meet live animals and explore nature-based learning.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Farm Fresh RI</strong>
                            <ul>
                                <li>3rd–4th graders learn healthy eating habits and cook with local produce.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Audubon Society</strong>
                            <ul>
                                <li>Brings animals and outdoor games to 5th–6th graders, encouraging environmental education.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Cheer and Soccer Clinics</strong>
                            <ul>
                                <li>Students practice leadership by teaching their classmates what they’ve learned.</li>
                            </ul>
                        </li>
                    </ul>

                    <p>
                        Each session is designed to be educational, engaging, and confidence-building. Scholars are encouraged to try new things, challenge themselves, and build friendships along the way.
                    </p>

                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default AfterSchoolEnrichmentBody;
