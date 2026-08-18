import './Footer.css';
import { Link } from 'react-router-dom';
import SegueLogo from '../../assets/images/logo-photos/temp-segue-logo.png';
import LegacyHSLogo from '../../assets/images/logo-photos/LegacyHighSchool-logo.jpg';
import facebookIcon from '../../assets/images/footer-photos/icons8-facebook-48.png';
import { footerNavigationSections } from '../../config/navigation';
import { useTranslation } from '../../hooks/useTranslation';

function Footer() {
  const { t } = useTranslation('common');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer-container">
      <div className="footer-sections">
        <div className="footer-contacts">
          <h1>{t('footer.contactTitle')}</h1>
          <p>
            <strong>{t('footer.schoolName')}</strong>
          </p>
          <p>
            {t('footer.addressLabel')}:{' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=325+Cowden+St,+Central+Falls,+RI+02863"
              target="_blank"
              rel="noreferrer"
            >
              {t('footer.addressValue')}
            </a>
          </p>
          <p>
            {t('footer.phoneLabel')}: <a href="tel:+14017210964">(401) 721-0964</a>
          </p>
          <p>{t('footer.faxLabel')}: (401) 721-0984</p>
          <p>
            {t('footer.websiteLabel')}:{' '}
            <a href="https://www.segueifl.org" target="_blank" rel="noreferrer">
              {t('footer.websiteValue')}
            </a>
          </p>
          <p>
            {t('footer.emailLabel')}:{' '}
            <a href="mailto:information@segueifl.org">{t('footer.emailValue')}</a>
          </p>
          <p>{t('footer.socialLabel')}</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/SegueIFL" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt={t('footer.logoAlt.facebook')} />
            </a>
          </div>
        </div>

        <div className="footer-logo">
          <Link to="/" onClick={scrollToTop} className="footer-segue-logo">
            <img src={SegueLogo} alt={t('footer.logoAlt.segue')} />
          </Link>
          <Link to="/LegacyCurriculumOverview" onClick={scrollToTop} className="footer-legacyhs-logo">
            <img src={LegacyHSLogo} alt={t('footer.logoAlt.legacy')} />
          </Link>
        </div>
      </div>

      <div className="footer-nav">
        {footerNavigationSections.map((section) => (
          <div key={section.labelKey} className="footer-nav-section">
            <h4>{t(section.labelKey)}</h4>
            {section.type === 'link' ? (
              <Link to={section.path} onClick={scrollToTop}>
                {t(section.labelKey)}
              </Link>
            ) : (
              section.items.map((item) =>
                item.external ? (
                  <a key={item.labelKey} href={item.path} target="_blank" rel="noopener noreferrer">
                    {t(item.labelKey)}
                  </a>
                ) : (
                  <Link key={item.labelKey} to={item.path} onClick={scrollToTop}>
                    {t(item.labelKey)}
                  </Link>
                ),
              )
            )}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </div>
  );
}

export default Footer;
