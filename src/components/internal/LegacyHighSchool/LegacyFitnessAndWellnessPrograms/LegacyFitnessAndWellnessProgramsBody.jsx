import './LegacyFitnessAndWellnessProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyFitnessAndWellnessProgramsBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-fitness-and-wellness-programs-container">
            <div className="legacy-fitness-and-wellness-programs-page-title">
                <h1>{t('fitnessAndWellnessPrograms.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-fitness-and-wellness-programs-content">
                    <p>{t('fitnessAndWellnessPrograms.body')}</p>

                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyFitnessAndWellnessProgramsBody;
