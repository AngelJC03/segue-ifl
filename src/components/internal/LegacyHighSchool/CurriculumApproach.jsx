import './CurriculumApproach.css'; // Import the CSS file for styling
import FadeIn from '../../fadeinsection/FadeIn';

function CurriculumApproach() {
    return (
        <FadeIn>
            <div className="curriculum-approach-container">
                <h2><strong>Curriculum Approach</strong></h2>
                <div className="curriculum-approach-grid">
                    <div className="curriculum-approach-text">
                        <p>
                            Our project-based learning model incorporates interdisciplinary instruction, hands-on learning, and authentic assessment to prepare students for the future.
                        </p>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default CurriculumApproach;