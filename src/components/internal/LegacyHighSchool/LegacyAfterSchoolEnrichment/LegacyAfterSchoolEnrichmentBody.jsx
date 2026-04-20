import './LegacyAfterSchoolEnrichmentBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyAfterSchoolEnrichmentBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-after-school-enrichment-container">
            <div className="legacy-after-school-enrichment-page-title">
                <h1>{t('afterSchoolEnrichment.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-after-school-enrichment-content">
                    <p>{t('afterSchoolEnrichment.body')}</p>
                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default LegacyAfterSchoolEnrichmentBody;
