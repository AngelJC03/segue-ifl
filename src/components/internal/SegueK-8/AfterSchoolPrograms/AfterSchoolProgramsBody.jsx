import './AfterSchoolProgramsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function AfterSchoolProgramsBody() {
    const { t } = useTranslation('segueK8');

    const overviewItems = t('afterSchoolPrograms.overviewItems', { returnObjects: true }) || [];
    const sessionOneItems = t('afterSchoolPrograms.sessionOneItems', { returnObjects: true }) || [];
    const sessionTwoItems = t('afterSchoolPrograms.sessionTwoItems', { returnObjects: true }) || [];

    return (
        <div className="after-school-programs-container">

            <div className="after-school-programs-page-title">
                <h1>{t('afterSchoolPrograms.title')}</h1>
            </div>

            <FadeIn>
                <div className="after-school-programs-content">

                    {/* PROGRAM OVERVIEW */}
                    <ul className="expectation-list">
                        <li>
                            ★ {t('afterSchoolPrograms.overviewTitle')}
                            <ul>
                                {Array.isArray(overviewItems) &&
                                    overviewItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </li>

                        {/* SESSION ONE */}
                        <li>
                            ★ {t('afterSchoolPrograms.sessionOneTitle')}
                            <ul>
                                {Array.isArray(sessionOneItems) &&
                                    sessionOneItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </li>

                        {/* SESSION TWO */}
                        <li>
                            ★ {t('afterSchoolPrograms.sessionTwoTitle')}
                            <ul>
                                {Array.isArray(sessionTwoItems) &&
                                    sessionTwoItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </li>

                        {/* CONTACT */}
                        <li>
                            ★ {t('afterSchoolPrograms.contactTitle')}
                            <ul>
                                <li>
                                    <a
                                        href="mailto:krodrigues@segueifl.org"
                                        aria-label={t('afterSchoolPrograms.contactAriaLabel')}
                                    >
                                        {t('afterSchoolPrograms.contactName')}
                                    </a>
                                    , {t('afterSchoolPrograms.contactRole')}
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default AfterSchoolProgramsBody;