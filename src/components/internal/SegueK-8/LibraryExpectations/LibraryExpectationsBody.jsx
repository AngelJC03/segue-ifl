import './LibraryExpectationsBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function LibraryExpectationsBody() {
    const { t } = useTranslation('segueK8');

    const sections =
        t('libraryExpectations.sections', { returnObjects: true }) || [];

    return (
        <div className="library-expectations-container">

            <div className="library-expectations-page-title">
                <h1>{t('libraryExpectations.title')}</h1>
            </div>

            <FadeIn>
                <div className="library-expectations-content">

                    <ul className="expectation-list">
                        {Array.isArray(sections) &&
                            sections.map((section, i) => (
                                <li key={i}>
                                    <strong>{section.title}</strong>

                                    {Array.isArray(section.items) && (
                                        <ul>
                                            {section.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
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

export default LibraryExpectationsBody;