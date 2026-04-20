import './LegacyLibraryExpectationsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyLibraryExpectationsBody() {
    const { t } = useTranslation('legacy');

    return (
        <div className="legacy-library-expectations-container">
            <div className="legacy-library-expectations-page-title">
                <h1>{t('libraryExpectations.title')}</h1>
            </div>
            <FadeIn>
                <div className="legacy-library-expectations-content">
                    <p>{t('libraryExpectations.body')}</p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default LegacyLibraryExpectationsBody;
