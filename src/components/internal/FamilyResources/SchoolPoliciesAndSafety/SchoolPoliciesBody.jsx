import './SchoolPoliciesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function SchoolPoliciesAndSafetyBody() {
    return (
        <div className="school-policies-and-safety-container">
            <div className="school-policies-and-safety-page-title">
                <h1> School Policies and Safety </h1>
            </div>
            <FadeIn>
                <div className="school-policies-and-safety-content">
                    
                    <p>
                        <strong>Creating a Safe and Supportive Environment</strong><br />
                        Safety and structure are essential for student success. Segue Institute for Learning enforces clear, consistent policies designed to support a calm, respectful learning environment. From daily routines to behavior expectations, our goal is to create a space where every student feels safe, valued, and supported.
                    </p>
                    <p>
                        Staff are trained in trauma-informed practices, de-escalation techniques, and emergency protocols. All visitors are screened upon entry, and staff are visible and accessible throughout the day. Our scholars know what’s expected of them—and they thrive in that clarity.
                    </p>
                    <p>
                        <strong>General Admissions Policy</strong><br />
                        Segue Institute for Learning is a free, public charter school serving Central Falls students in grades K–8. We welcome all eligible students without regard to academic performance, testing, or background.
                    </p>
                    <p>
                        Admission is open to students who are grade-level appropriate and reside in Central Falls at the time of application. Applications from outside Central Falls are considered invalid for lottery purposes.
                    </p>

                    <p><strong>Equal Opportunity Statement</strong></p>
                    <p>
                        Segue Institute for Learning is committed to maintaining a work and learning environment free from discrimination on the basis of race, color, religion, national origin, pregnancy, gender identity, sexual orientation, marital or civil union status, ancestry, place of birth, age, citizenship status, veteran status, political affiliation, genetic information, or disability—as defined and required by state and federal law.
                    </p>
                    <p>
                        We also strictly prohibit retaliation against individuals who oppose such discrimination or who participate in any related investigation.
                    </p>
                    <p>
                        <strong>To file a complaint of discrimination, contact:</strong><br />
                        USDA, Director, Office of Civil Rights<br />
                        1400 Independence Avenue, S.W., Washington, D.C. 20250-9410<br />
                        <strong>Phone:</strong> (800) 795-3272 (voice) | (202) 720-6382 (TDD)
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default SchoolPoliciesAndSafetyBody;