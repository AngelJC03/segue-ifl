import './CommunityPartnersBody.css';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import CenteredLogo from '../../../CenteredLogo.jsx';

function CommunityPartnersBody() {
  return (
    <div className="community-partnerships-container">
      <div className="community-partnerships-page-title">
        <h1>Community Partnerships</h1>
      </div>

      <FadeIn>
        <div className="community-partnerships-content">
          <p>
            The Segue Institute for Learning partners with local colleges, nonprofits, 
            and businesses to offer internships, mentorships, and enrichment programs. 
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

      <CenteredLogo />
    </div>
  );
}

export default CommunityPartnersBody;
