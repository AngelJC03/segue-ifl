import './AfterSchoolEnrichmentBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function AfterSchoolEnrichmentBody() {
    const { t } = useTranslation('segueK8');
    const sections = t('afterSchoolEnrichment.sections');

    return (
        <div className="after-school-enrichment-container">
            <div className="after-school-enrichment-page-title">
                <h1>{t('afterSchoolEnrichment.title')}</h1>
            </div>
            <FadeIn>
                <div className="after-school-enrichment-content">
                    <p>{t('afterSchoolEnrichment.intro')}</p>

                    <ul className="enrichment-list">
                        {sections.map((section) => (
                            <li key={section.heading}>
                                <strong>{section.heading}</strong>
                                <ul>
                                    {section.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <p>{t('afterSchoolEnrichment.outro')}</p>

                    <CenteredLogo />
                </div>
            </FadeIn>
        </div>
    );
}

export default AfterSchoolEnrichmentBody;
