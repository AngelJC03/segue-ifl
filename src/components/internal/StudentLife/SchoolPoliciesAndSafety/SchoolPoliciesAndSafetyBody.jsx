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
            Safety and structure are essential for student success. Segue Institute for Learning enforces clear, consistent policies designed to support a calm, respectful learning environment. From daily routines to behavior expectations, our goal is to create a space where every student feels safe, valued, and supported.
            <br />
            <br />
            Staff are trained in trauma-informed practices, de-escalation techniques, and emergency protocols. All visitors are screened upon entry, and staff are visible and accessible throughout the day. Our scholars know what’s expected of them—and they thrive in that clarity.
                </p>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default SchoolPoliciesAndSafetyBody;
