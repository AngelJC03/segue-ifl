import React from 'react';
import './CollegeCareerReadiness.css'; // Import the CSS file for styling
import FadeIn from '../../fadeinsection/FadeIn';
import image2 from '../../../assets/images/legacyhs-page-photos/Legacy 3.jpg';

function CollegeCareerReadiness() {
  return (
    <FadeIn>
      <div className="college-career-readiness-container">
        <h2><strong>College &amp; Career Readiness</strong></h2>
        <div className="college-career-readiness-grid">
          <div className="college-career-readiness-text">
            <p>
              College and career planning is woven into our high school experience, with access to advisors, application workshops, and job exploration.
            </p>
          </div>
          <div className="college-career-readiness-image">
            <img src={image2} alt="Legacy High School Curriculum" className="legacy-image" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default CollegeCareerReadiness;
