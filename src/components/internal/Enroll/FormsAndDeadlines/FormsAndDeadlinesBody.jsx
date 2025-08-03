// import { React } from 'react';
import './FormsAndDeadlinesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function FormsAndDeadlinesBody() {
    return (
        <div className="forms-and-deadlines-container">
            <div className="forms-and-deadlines-page-title">
                <h1>Forms and Deadlines</h1>
            </div>
            <FadeIn>
                <div className="forms-and-deadlines-content">
                    <p>
                        Below you'll find important forms, application portals, and key dates for enrollment at Segue Institute for Learning and Legacy High School.
                    </p>

                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>EnrollRI Application Portal:</strong><br />
                            Use the <a href="https://www.enrollri.org" target="_blank" rel="noopener noreferrer">EnrollRI Common Application</a> to apply. First-time users must create an account; returning users can log in with their existing credentials.
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>Lottery Application Window:</strong><br />
                            <strong>Opens:</strong> November 19, 2024 at 9:00 AM<br />
                            <strong>Closes:</strong> March 13, 2025 at 5:00 PM
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>Lottery Drawing:</strong><br />
                            Held publicly at Segue on <strong>April 1, 2025</strong>. Families are notified by phone or postcard.
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>Post-Lottery Applications:</strong><br />
                            Open starting <strong>April 15, 2025</strong> for late applicants. Waitlist offers may follow as space becomes available.
                        </li>

                        <li style={{ marginBottom: '20px' }}>
                            <span style={{ color: '#f4c542', fontWeight: 'bold', marginRight: '10px' }}>★</span>
                            <strong>Required School Selections:</strong><br />
                            When applying, select:
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '10px' }}>
                                <li>Segue Institute for Learning — Grades K–8 (Central Falls)</li>
                                <li>Legacy High School — Grades 9–12 (Available to students from Central Falls, Providence, Pawtucket, and Woonsocket)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default FormsAndDeadlinesBody;
