// import { React } from 'react';
import './CurriculumOverviewBody.css';
import FadeIn from '../../../fadeinsection/FadeIn'
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function CurriculumOverviewBody() {
    const { t } = useTranslation('segueK8');

    return (
            <div className="curriculum-overview-container">
                <div className="curriculum-overview-page-title">
                    <h1>{t('curriculumOverview.title')}</h1>
                </div>
                <FadeIn>
                    <p className="curriculum-overview-content">{t('curriculumOverview.body')}</p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default CurriculumOverviewBody;
