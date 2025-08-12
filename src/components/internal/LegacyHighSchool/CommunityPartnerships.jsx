import React from 'react';
import FadeIn from '../../fadeinsection/FadeIn';
import './CommunityPartnerships.css'; // CSS for the stars styling

function CommunityPartnerships() {
  return (
    <FadeIn>
      <div className="community-partnerships-container">
        <h2><strong>Community Partnerships</strong></h2>
        <p>
          Legacy High partners with local colleges, nonprofits, and businesses to offer internships, mentorships, and enrichment programs. 
          Our partners include:
        </p>
        <ul className="star-list">
          <li><strong>Rhode Island Community Food Bank</strong></li>
          <li><strong>City of Central Falls</strong></li>
          <li><strong>Central Falls School District</strong></li>
          <li><strong>Rhode Island League of Charter Schools</strong></li>
          <li><strong>Sojourner House</strong></li>
        </ul>
      </div>
    </FadeIn>
  );
}

export default CommunityPartnerships;
