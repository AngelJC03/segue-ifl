import './LegacyHighSchoolBody.css';
import CenteredLogo from '../../CenteredLogo';
import VisionsAndValues from './VisionsAndValues.jsx';
import CurriculumApproach from './CurriculumApproach.jsx';
import CollegeCareerReadiness from './CollegeCareerReadiness.jsx';
import EnrollmentInfo from './EnrollmentInfo.jsx';
import CommunityPartnerships from './CommunityPartnerships.jsx';

function LegacyHighSchoolBody() {
    return (
        <div className="legacy-high-school-container">
            <div className="legacy-high-school-page-title">
                <h1> Legacy High School </h1>
            </div>
            <div className="legacy-high-school-content">
                <VisionsAndValues />
                <CurriculumApproach />
                <CollegeCareerReadiness />
                <CommunityPartnerships />
                <EnrollmentInfo />
            </div>
            <CenteredLogo />
        </div>
    );
}

export default LegacyHighSchoolBody;
