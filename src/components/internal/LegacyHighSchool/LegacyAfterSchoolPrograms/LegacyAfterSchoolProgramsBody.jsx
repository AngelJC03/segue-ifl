// import { React } from 'react';
import './LegacyAfterSchoolProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyAfterSchoolProgramsBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-after-school-programs-container">
            <div className="legacy-after-school-programs-page-title">
                <h1>{t('afterSchoolPrograms.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-after-school-programs-content">
                    <p>{t('afterSchoolPrograms.body')}</p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyAfterSchoolProgramsBody;
