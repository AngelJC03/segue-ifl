// import { React } from 'react';
import './LegacyCurriculumOverviewBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyCurriculumOverviewBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-curriculum-overview-container">
            <div className="legacy-curriculum-overview-page-title">
                <h1>{t('curriculumOverview.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-curriculum-overview-content">
                    <section>
                        <p>{t('curriculumOverview.intro')}</p>
                    </section>
                    <br/>
                    <section>
                        <h1>{t('curriculumOverview.careerTitle')}</h1>
                        <p>{t('curriculumOverview.careerBody')}</p>
                    </section>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyCurriculumOverviewBody;
