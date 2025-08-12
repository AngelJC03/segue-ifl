import React from 'react';
import './VisionsAndValues.css'; // Import the CSS file for styling
import FadeIn from '../../fadeinsection/FadeIn';
import image3 from '../../../assets/images/legacyhs-page-photos/Legacy 4.jpg';


function VisionsAndValues() {

    return (
        <FadeIn>
            <div className="vision-values-container">
                    <h2><strong>Vision &amp; Values</strong></h2>
                    <div className="vision-values-grid">
                        <div className="vision-values-text">
                            <p>
                                Legacy High School continues Segue’s mission by preparing students in grades 9–12 
                                for success in college, career, and civic life. 
                                We focus on leadership development, academic rigor, and real-world application.
                            </p>
                        </div>
                        <div className="vision-values-image">
                            <img src={image3} alt="Legacy High School Vision" className="legacy-image" />
                        </div>
                    </div>
            </div>
        </FadeIn>
    )
}

export default VisionsAndValues;