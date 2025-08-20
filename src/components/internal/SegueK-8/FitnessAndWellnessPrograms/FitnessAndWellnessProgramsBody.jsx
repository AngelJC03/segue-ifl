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
                <div className="fitness-and-wellness-programs-content">
                    <p>
                        Health and wellness are woven into the Segue experience. Our PE curriculum includes <strong>Falcon Fitness</strong>, a program built around stamina, strength, and self-discipline. Scholars engage in activities that boost endurance, flexibility, and focus, with guidance from caring coaches and instructors.
                    </p>

                        <p>
                            Our <strong>Boxing Fundamentals</strong> class, for example, introduces upper-grade students to skills like footwork, coordination, and mental toughness—lessons that carry over into the classroom and life beyond school.
                        </p>

                        <p>
                            Wellness is also about emotional balance. We encourage self-care, mindfulness breaks, and a culture of kindness that supports the whole child.
                        </p>

                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default FitnessAndWellnessProgramsBody;