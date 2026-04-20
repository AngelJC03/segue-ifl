import './CommunityPartnersBody.css';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import CenteredLogo from '../../../CenteredLogo.jsx';
import { useTranslation } from '../../../../hooks/useTranslation';

function CommunityPartnersBody() {
  const { t } = useTranslation('about');
  const partners = t('communityPartners.partners');

  return (
    <div className="community-partnerships-container">
      <div className="community-partnerships-page-title">
        <h1>{t('communityPartners.title')}</h1>
      </div>

      <FadeIn>
        <div className="community-partnerships-content">
          <p>{t('communityPartners.description')}</p>
          <ul className="star-list">
            {partners.map((partner) => (
              <li key={partner}>
                <strong>{partner}</strong>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <CenteredLogo />
    </div>
  );
}

export default CommunityPartnersBody;
