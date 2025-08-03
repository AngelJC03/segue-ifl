// import { React } from 'react';
import './AdmissionsAndLotteryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function AdmissionsAndLotteryBody() {
    return (
        <div className="admissions-and-lottery-container">
            <div className="admissions-and-lottery-page-title">
                <h1>Admissions and Lottery</h1>
            </div>
            <FadeIn>
                <div className="admissions-and-lottery-content">

                    <h2><strong>How to Apply</strong></h2>
                    <p>Families can request an application by:</p>
                    <ul className="admissions-list">
                        <li>Visiting our school office</li>
                        <li>Calling (401) 721-0964</li>
                        <li>Emailing <a href="mailto:info@segueifl.org">info@segueifl.org</a></li>
                        <li>Downloading it directly from <a href="https://segueifl.org" target="_blank" rel="noopener noreferrer">SegueIFL.org</a></li>
                    </ul>
                    <p>
                        Applications are provided in both English and Spanish and may be submitted electronically.
                    </p>
                    <p>
                        🗓️ <strong>Application Deadline: February 15th</strong> (to be included in the lottery)
                    </p>

                    <br />

                    <h2><strong>Lottery Process</strong></h2>
                    <p>
                        When the number of applicants exceeds the number of available seats, Segue conducts a random public lottery
                        in accordance with Rhode Island Department of Education (RIDE) guidance.
                    </p>
                    <ul className="admissions-list">
                        <li><strong>Date:</strong> <strong>March 1st</strong> (or the next business day if on a weekend/holiday)</li>
                        <li><strong>Location:</strong> Segue Institute for Learning, 325 Cowden Street</li>
                        <li><strong>Format:</strong> Public event—families may attend but are not required to be present</li>
                    </ul>
                    <p>
                        Parents/guardians will be notified via phone, postcard, and/or social media.
                        Results determine admission offers and waitlist status.
                    </p>

                    <h2><strong>Lottery Exemptions</strong></h2>
                    <ul className="admissions-list">
                        <li>
                            <strong>Siblings of Current Students:</strong> Siblings (as defined by shared legal guardian or parent)
                            may be exempt from the lottery and admitted directly. Documentation is required, including photo ID
                            and a birth certificate or guardianship papers.
                        </li>
                        <li>
                            <strong>Children of Segue Staff:</strong> Children of full-time staff may also be admitted directly,
                            provided they do not exceed 10% of the school’s total enrollment. If more apply than there are spaces,
                            a separate pre-lottery will be conducted for staff children.
                        </li>
                    </ul>

                    <h2><strong>Waitlist Process</strong></h2>
                    <p>
                        Students not offered a seat during the lottery will be placed on a ranked waitlist. As openings occur,
                        families will be contacted in the order determined by the lottery.
                    </p>
                    <p>
                        If no waitlist exists for a particular grade level and a qualified applicant arrives after the school year
                        begins, Segue may admit them directly if they meet residency and age requirements.
                    </p>

                    <h2><strong>Confirming Enrollment</strong></h2>
                    <p>
                        Accepted families must confirm their intent to enroll within 15 days of notification by submitting a full Enrollment Packet.
                        If a family does not respond in time, the seat will be offered to the next applicant on the waitlist.
                    </p>
                    <p>The enrollment packet includes:</p>
                    <ul className="admissions-list">
                        <li>Proof of identity</li>
                        <li>Prior school academic records</li>
                        <li>Special education documentation (IEP or 504, if applicable)</li>
                    </ul>
                    <p>
                        ⏳ Packets submitted after the 15-day deadline will not be accepted, and the applicant will be placed at the bottom of the waitlist.
                    </p>

                    <h2><strong>Contact for Enrollment</strong></h2>
                    <p>
                        Segue Institute for Learning<br />
                        Cowden Street Collaborative, Inc.<br />
                        📞 (401) 721-0964 Ext. 104<br />
                        📱 (401) 481-3378<br />
                        📧 <a href="mailto:Angelo.Garcia@segueifl.org">Angelo.Garcia@segueifl.org</a>
                    </p>

                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default AdmissionsAndLotteryBody;
