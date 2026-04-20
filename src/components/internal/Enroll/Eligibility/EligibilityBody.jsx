// import { React } from 'react';
import './EligibilityBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function EligibilityBody() {
    const { t } = useTranslation('enroll');

    return (
            <div className="eligibility-container">
                <div className="eligibility-page-title">
                    <h1>{t('eligibility.title')}</h1>
                </div>
                <FadeIn>
                    <p className="eligibility-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default EligibilityBody;
