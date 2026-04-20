import './LegacyUniformPolicyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyUniformPolicyBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-uniform-policy-container">
            <div className="legacy-uniform-policy-page-title">
                <h1>{t('uniformPolicy.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-uniform-policy-content">
                    <p>{t('uniformPolicy.body')}</p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyUniformPolicyBody;
