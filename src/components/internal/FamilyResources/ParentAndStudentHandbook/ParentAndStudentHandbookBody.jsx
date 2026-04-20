// import { React } from 'react';
import './ParentAndStudentHandbookBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import EnglishHandbook from '../../../../../src/assets/pdfs/englishstudenthandbook.pdf';
import SpanishHandbook from '../../../../../src/assets/pdfs/spanishstudenthandbook.pdf';
import { useTranslation } from '../../../../hooks/useTranslation';

function ParentAndStudentHandbookBody() {
    const { t } = useTranslation('familyResources');

    return (
        <div className="school-handbook-container">
            <div className="school-handbook-page-title">
                <h1>{t('parentAndStudentHandbook.title')}</h1>
            </div>

            <FadeIn>
                <p className="school-handbook-content">{t('parentAndStudentHandbook.description')}</p>

                <div className="school-handbook-links">
                    <a 
                        href={EnglishHandbook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        📘 {t('parentAndStudentHandbook.englishLink')}
                    </a>

                    <br />

                    <a 
                        href={SpanishHandbook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        📘 {t('parentAndStudentHandbook.spanishLink')}
                    </a>
                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default ParentAndStudentHandbookBody;
