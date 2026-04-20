import './FitnessAndWellnessProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function FitnessAndWellnessProgramsBody() {
    const { t } = useTranslation('segueK8');

    const paragraphs =
        t('fitnessAndWellnessPrograms.paragraphs', { returnObjects: true }) || [];

    const renderRichText = (content) => {
        return content.map((part, i) => {
            if (typeof part === 'string') return part;
            if (part.bold) return <strong key={i}>{part.bold}</strong>;
            return null;
        });
    };

    return (
        <div className="fitness-and-wellness-programs-container">

            <div className="fitness-and-wellness-programs-page-title">
                <h1>{t('fitnessAndWellnessPrograms.title')}</h1>
            </div>

            <FadeIn>
                <div className="fitness-and-wellness-programs-content">

                    {Array.isArray(paragraphs) &&
                        paragraphs.map((p, i) => (
                            <p key={i}>
                                {renderRichText(p.content)}
                            </p>
                        ))
                    }

                    <CenteredLogo />

                </div>
            </FadeIn>
        </div>
    );
}

export default FitnessAndWellnessProgramsBody;