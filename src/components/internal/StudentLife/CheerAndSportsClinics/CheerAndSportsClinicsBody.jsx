import './CheerAndSportsClinicsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function CheerAndSportsClinicsBody() {
    return (
        <div className="cheer-and-sports-clinics-container">
            <div className="cheer-and-sports-clinics-page-title">
                <h1> Cheer & Sports Clinics </h1>
            </div>
            <FadeIn>
                <p className="cheer-and-sports-clinics-content">

                </p>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default CheerAndSportsClinicsBody;
