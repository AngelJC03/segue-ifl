// import { React } from 'react';
import './HowToEnrollBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function HowToEnrollBody() {
    return (
        <div className="how-to-enroll-container">
            <div className="how-to-enroll-page-title">
                <h1>How to Enroll</h1>
            </div>
            <FadeIn>
                <div className="how-to-enroll-content">
                    <p>
                        <strong>Interested in joining the Segue community?</strong><br />
                        Visit this page for enrollment forms, eligibility details, deadlines, and application requirements.
                    </p>

                    <ul className="enrollment-steps">
                        <li>
                            <strong>Step 1: Create Your EnrollRI Account</strong><br />
                            Visit the EnrollRI Common Application portal, powered by the Rhode Island Department of Education.
                            First‑time users should click "Create an Account" to begin. Returning users can log in using the same
                            email or mobile number previously used—even if it was for a different school or All Course Network (ACN) application.
                        </li>
                        <li>
                            <strong>Step 2: Add Students and Select Segue</strong><br />
                            Once logged in, use "Add a Student" if your child is not already listed under your account. Then start your application and be sure to select:
                            <ul>
                                <li>Segue Institute for Learning for grades K–8 within Central Falls</li>
                                <li>Legacy High School for grades 9–12 (eligible from Central Falls, Providence, Pawtucket, and Woonsocket)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Step 3: Apply Before the Lottery Deadline</strong><br />
                            The lottery application for the 2025–26 school year opened <strong>November 19, 2024 at 9 AM</strong> and closed <strong>March 13, 2025 at 5 PM</strong>.
                            If there were more applicants than seats, a random lottery drawing took place on <strong>April 1, 2025</strong>.
                            Families who apply on time are automatically entered into the lottery pool.<br />
                            If you missed the deadline, a Post-Lottery Application becomes available starting <strong>April 15, 2025</strong>.
                        </li>
                        <li>
                            <strong>Step 4: Submit and Review Your Application</strong><br />
                            You can update or edit your application—including changing school choices—up until the deadline.
                            Once submitted and accepted into the lottery, Segue staff will contact you if your child is offered a seat.
                        </li>
                        <li>
                            <strong>Step 5: Lottery & Next Steps</strong><br />
                            The lottery is a public event held at the Segue school building. Active applicants are notified via phone or postcard.
                            Those not offered a spot may be placed on a waitlist and contacted if space becomes available.
                        </li>
                    </ul>

                    <div className="checklist-section">
                        <h2>✅ Summary Checklist</h2>
                        <ul className="checklist">
                            <li>
                                <label>
                                    <input type="checkbox" /> Create or log in to your EnrollRI account
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" /> Add your child and select Segue Institute or Legacy High School
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" /> Submit before stated deadline
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" /> Edit your application if needed before the deadline
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" /> Wait for lottery results and follow next steps based on outcome
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default HowToEnrollBody;
