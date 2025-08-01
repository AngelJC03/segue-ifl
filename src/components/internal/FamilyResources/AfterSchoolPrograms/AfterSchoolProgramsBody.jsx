// import { React } from 'react';
import './AfterSchoolProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function AfterSchoolProgramsBody() {
    return (
        <div className="after-school-programs-container">
            <div className="after-school-programs-page-title">
                <h1> After School Programs </h1>
            </div>
            <FadeIn>
                <div className="after-school-programs-content">
                    <ul className="expectation-list">
                        <li>
                            ★ Program Overview
                            <ul>
                                <li>Our afterschool program provides hands-on, engaging experiences that extend learning beyond the classroom.</li>
                            </ul>
                        </li>
                        <li>
                            ★ Session One Highlights
                            <ul>
                                <li><strong>K–1st Grade:</strong> Partnered with Roger Williams Zoo to meet animals and integrate ELA/Math stations.</li>
                                <li><strong>3rd–4th Grade:</strong> Explored healthy cooking with Farm Fresh Rhode Island.</li>
                                <li><strong>5th–6th Grade:</strong> Learned about local wildlife through the Audubon Society; played scavenger hunts and outdoor games.</li>
                                <li><strong>Enrichment Clinics:</strong> Cheer and Soccer students practiced new skills and taught them to classmates.</li>
                            </ul>
                        </li>
                        <li>
                            ★ Session Two Focus
                            <ul>
                                <li><strong>Boxing Fundamentals with Mr. Powell</strong> focuses on strength, conditioning, and confidence.</li>
                                <li>Also reinforced through Falcon Fitness and Gym classes.</li>
                            </ul>
                        </li>
                        <li>
                            ★ Contact
                            <ul>
                                <li><a href="/">Alexis Kutenplon-Rayess</a>, After School Coordinator</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default AfterSchoolProgramsBody;
