import './SchoolPoliciesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function SchoolPoliciesAndSafetyBody() {
    const { t } = useTranslation('familyResources');

    return (
        <div className="school-policies-and-safety-container">
            <div className="school-policies-and-safety-page-title">
                <h1>{t('schoolPoliciesAndSafety.title')}</h1>
            </div>

            <FadeIn>
                <div className="school-policies-and-safety-content">

                    <p>
                        <strong>{t('schoolPoliciesAndSafety.safeEnvironment.title')}</strong><br />
                        {t('schoolPoliciesAndSafety.safeEnvironment.p1')}
                    </p>

                    <p>
                        {t('schoolPoliciesAndSafety.safeEnvironment.p2')}
                    </p>

                    <p>
                        <strong>{t('schoolPoliciesAndSafety.admissions.title')}</strong><br />
                        {t('schoolPoliciesAndSafety.admissions.p1')}
                    </p>

                    <p>
                        {t('schoolPoliciesAndSafety.admissions.p2')}
                    </p>

                    <p>
                        <strong>{t('schoolPoliciesAndSafety.eo.title')}</strong>
                    </p>

                    <p>
                        {t('schoolPoliciesAndSafety.eo.p1')}
                    </p>

                    <p>
                        {t('schoolPoliciesAndSafety.eo.p2')}
                    </p>

                    <p>
                        <strong>{t('schoolPoliciesAndSafety.eo.complaintTitle')}</strong><br />
                        {t('schoolPoliciesAndSafety.eo.complaintLine1')}<br />
                        {t('schoolPoliciesAndSafety.eo.complaintLine2')}<br />
                        <strong>{t('schoolPoliciesAndSafety.eo.phone')}</strong>
                    </p>

                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default SchoolPoliciesAndSafetyBody;