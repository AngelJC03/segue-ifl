import './UniformPolicyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function UniformPolicyBody() {
    const { t } = useTranslation('segueK8');

    const formalItems = t('uniformPolicy.formalItems', { returnObjects: true }) || [];
    const peItems = t('uniformPolicy.peItems', { returnObjects: true }) || [];

    return (
        <div className="uniform-policy-container">

            <div className="uniform-policy-page-title">
                <h1>{t('uniformPolicy.title')}</h1>
            </div>

            <FadeIn>
                <div className="uniform-policy-content">

                    {/* FORMAL UNIFORM */}
                    <ul className="expectation-list">
                        <li>
                            <strong>{t('uniformPolicy.formalTitle')}</strong>
                            <ul>
                                {Array.isArray(formalItems) &&
                                    formalItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>

                    {/* NOT ALLOWED */}
                    <div className="uniform-policy-prohibited">
                        <strong>{t('uniformPolicy.notAllowedLabel')}</strong>{' '}
                        {t('uniformPolicy.notAllowedText')}
                    </div>

                    {/* PE UNIFORM */}
                    <ul className="expectation-list">
                        <li>
                            <strong>{t('uniformPolicy.peTitle')}</strong>
                            <ul>
                                {Array.isArray(peItems) &&
                                    peItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>

                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default UniformPolicyBody;