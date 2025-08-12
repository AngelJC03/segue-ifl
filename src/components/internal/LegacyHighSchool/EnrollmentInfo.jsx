import React from 'react';
import FadeIn from '../../fadeinsection/FadeIn';
import image1 from '../../../assets/images/legacyhs-page-photos/Holiday 2024 7.png';
import './EnrollmentInfo.css'; // Your CSS file

function EnrollmentInfo() {
  return (
    <FadeIn>
      <div className="enrollment-information-container">
        <h2><strong>Enrollment Information</strong></h2>
        <div className="enrollment-information-grid">
          <div className="enrollment-information-text">
            <p>
              Legacy High School welcomes students from Central Falls, Providence, Pawtucket, and Woonsocket. 
              Contact our main office for application details.
            </p>
          </div>
          <div className="enrollment-information-image">
            <img 
              src={image1} 
              alt="Legacy High School Community Partnerships" 
              className="legacy-image" 
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default EnrollmentInfo;
