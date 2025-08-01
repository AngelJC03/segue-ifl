// import { React } from 'react';
import './LegacyHighSchoolBody.css';
import FadeIn from '../../fadeinsection/FadeIn';
import CenteredLogo from '../../CenteredLogo';

function LegacyHighSchoolBody() {
    return (
        <div className="legacy-high-school-container">
            <div className="legacy-high-school-page-title">
                <h1> Legacy High School </h1>
            </div>
            <FadeIn>
                <div className="legacy-high-school-content">

                    <div className="info-box">
                        <h2>Vision &amp; Values</h2>
                        <p>
                            Legacy High School continues Segue’s mission by preparing students in grades 9–12 for success in college, career, and civic life. 
                            We focus on leadership development, academic rigor, and real-world application.
                        </p>
                    </div>

                    <div className="info-box">
                        <h2>Curriculum Approach</h2>
                        <p>
                            Our project-based learning model incorporates interdisciplinary instruction, hands-on learning, and authentic assessment 
                            to prepare students for the future.
                        </p>
                    </div>

                    <div className="info-box">
                        <h2>College &amp; Career Readiness</h2>
                        <p>
                            College and career planning is woven into our high school experience, with access to advisors, application workshops, 
                            and job exploration.
                        </p>
                    </div>

                    <div className="info-box">
                        <h2>Community Partnerships</h2>
                        <p>
                            Legacy High partners with local colleges, nonprofits, and businesses to offer internships, mentorships, and enrichment programs. 
                            Our partners include:
                        </p>
                        <ul>
                            <li>Rhode Island Community Food Bank</li>
                            <li>City of Central Falls</li>
                            <li>Central Falls School District</li>
                            <li>Rhode Island League of Charter Schools</li>
                            <li>Sojourner House</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h2>Enrollment Information</h2>
                        <p>
                            Legacy High School welcomes students from Central Falls, Providence, Pawtucket, and Woonsocket. 
                            Contact our main office for application details.
                        </p>
                    </div>

                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyHighSchoolBody;
