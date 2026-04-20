// import { React } from 'react';
import './LegacySchoolAnnouncementsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacySchoolAnnouncementsBody() {
    const { t } = useTranslation('legacy');

    return (
            <div className="legacy-school-announcements-container">
                <div className="legacy-school-announcements-page-title">
                    <h1>{t('schoolAnnouncements.title')}</h1>
                </div>
                <FadeIn>
                    <p className="legacy-school-announcements-content">
                        {t('schoolAnnouncements.body')}
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default LegacySchoolAnnouncementsBody;
