import './FitnessAndWellnessProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function FitnessAndWellnessProgramsBody() {
    return (
        <div className="fitness-and-wellness-programs-container">
            <div className="fitness-and-wellness-programs-page-title">
                <h1>Fitness & Wellness Programs</h1>
            </div>
            <FadeIn>
                <p className="fitness-and-wellness-programs-content">
                    {/* Add information about fitness and wellness programs here */}
                </p>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default FitnessAndWellnessProgramsBody; 