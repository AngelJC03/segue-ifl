// import { React } from 'react';
import './SchoolAnnouncementsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function SchoolAnnouncementsBody() {
    const { t } = useTranslation('segueK8');

    return (
            <div className="school-announcements-container">
                <div className="school-announcements-page-title">
                    <h1>{t('schoolAnnouncements.title')}</h1>
                </div>
                <FadeIn>
                    <p className="school-announcements-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default SchoolAnnouncementsBody;
