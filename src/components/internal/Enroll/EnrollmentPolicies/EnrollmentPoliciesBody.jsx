import './EnrollmentPoliciesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function EnrollmentPoliciesBody() {
    const { t } = useTranslation('enroll');

    const renderRichText = (content = []) =>
        content.map((part, i) => {
            if (typeof part === 'string') return part;
            if (part.bold) return <strong key={i}>{part.bold}</strong>;
            return null;
        });

    const siblings = t('enrollmentPolicies.lottery.siblings', { returnObjects: true }) || {};

    return (
        <div className="enrollment-policies-container">

            <div className="enrollment-policies-page-title">
                <h1>{t('enrollmentPolicies.title')}</h1>
            </div>

            <FadeIn>
                <div className="enrollment-policies-content">

                    <p>
                        <strong>{t('enrollmentPolicies.equalOpportunity.title')}</strong>
                    </p>

                    <p>{t('enrollmentPolicies.equalOpportunity.p1')}</p>

                    <p>{t('enrollmentPolicies.equalOpportunity.p2')}</p>

                    <p>
                        <strong>{t('enrollmentPolicies.complaint.title')}</strong><br />
                        {t('enrollmentPolicies.complaint.line1')}<br />
                        {t('enrollmentPolicies.complaint.line2')}<br />
                        {t('enrollmentPolicies.complaint.phone')}
                    </p>

                    <p>
                        <strong>{t('enrollmentPolicies.lottery.title')}</strong>
                    </p>

                    <ul className="lottery-exemptions-list">
                        {Array.isArray(siblings) &&
                            siblings.map((block, i) => (
                            <li key={i}>
                                {renderRichText(block)}
                            </li>
                            ))
                        }
                    </ul>

                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default EnrollmentPoliciesBody;