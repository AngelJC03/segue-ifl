// import { React } from 'react';
import './EnrollmentPoliciesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function EnrollmentPoliciesBody() {
    return (
        <div className="enrollment-policies-container">
            <div className="enrollment-policies-page-title">
                <h1>Enrollment Policies</h1>
            </div>
            <FadeIn>
                <div className="enrollment-policies-content">
                    <p>
                        <strong>Equal Opportunity Statement</strong>
                    </p>
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
                        Phone: (800) 795-3272 (voice) | (202) 720-6382 (TDD)
                    </p>

                    <p>
                        <strong>Lottery Exemptions</strong>
                    </p>
                    <ul className="lottery-exemptions-list">
                        <li>
                            <strong>Siblings of Current Students:</strong> Siblings (as defined by shared legal guardian or parent) may be exempt from the lottery and admitted directly. Documentation is required, including photo ID and a birth certificate or guardianship papers.
                        </li>
                        <li>
                            <strong>Children of Segue Staff:</strong> Children of full-time staff may also be admitted directly, provided they do not exceed 10% of the school’s total enrollment. If more apply than there are spaces, a separate pre-lottery will be conducted for staff children.
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default EnrollmentPoliciesBody;
