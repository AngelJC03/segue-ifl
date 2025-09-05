// import { React } from 'react';
import './LegacyCurriculumOverviewBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyCurriculumOverviewBody() {
    return (
        <div className="legacy-curriculum-overview-container">
            <div className="legacy-curriculum-overview-page-title">
                <h1>Curriculum Overview</h1>
            </div>
            <FadeIn>
                <div className="legacy-curriculum-overview-content">
                    <section>
                        <p>
                            At Legacy High School, our project-based learning model integrates interdisciplinary instruction, 
                            hands-on learning, and authentic assessment strategies. Students engage with real-world challenges, 
                            collaborate in teams, and develop critical thinking skills to prepare for the demands of college, 
                            careers, and life beyond the classroom. Our approach emphasizes creativity, innovation, and lifelong 
                            learning, ensuring students leave with both knowledge and practical skills.
                        </p>
                    </section>
                    <br/>
                    <section>
                        <h1>College &amp; Career Readiness</h1>
                        <p>
                            College and career planning is woven into our high school experience, with access to advisors, application workshops,
                            and job exploration. Through mentorship, internships, and career exploration programs, students gain 
                            exposure to a wide range of opportunities, helping them make informed decisions and confidently pursue their 
                            future ambitions.
                        </p>
                    </section>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyCurriculumOverviewBody;
