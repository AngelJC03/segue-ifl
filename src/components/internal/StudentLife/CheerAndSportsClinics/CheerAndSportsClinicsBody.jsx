import './CheerAndSportsClinicsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function CheerAndSportsClinicsBody() {
    return (
        <div className="cheer-and-sports-clinics-container">
            <div className="cheer-and-sports-clinics-page-title">
                <h1>Cheer & Sports Clinics</h1>
            </div>
            <FadeIn>
                <div className="cheer-and-sports-clinics-content">
                    <p>
                        Whether you're just getting started or ready to lead, our athletic clinics are designed to meet scholars where they are. Seasonal offerings include Cheerleading, Soccer, and other recreational sports that emphasize:
                    </p>

                    <ul className="clinic-benefits-list">
                        <li>Teamwork and communication</li>
                        <li>Confidence through movement</li>
                        <li>Goal-setting and leadership</li>
                    </ul>

                    <p>
                        Cheer and sports programs culminate in showcases or peer-led sessions, giving students a platform to share their progress and mentor others.
                    </p>

                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default CheerAndSportsClinicsBody;
