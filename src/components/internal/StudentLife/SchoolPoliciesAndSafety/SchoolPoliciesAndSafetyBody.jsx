import './SchoolPoliciesAndSafetyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function SchoolPoliciesAndSafetyBody() {
    return (
        <div className="school-policies-and-safety-container">
            <div className="school-policies-and-safety-page-title">
                <h1> School Policies and Safety </h1>
            </div>
            <FadeIn>
                <p className="school-policies-and-safety-content">

                </p>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default SchoolPoliciesAndSafetyBody;
