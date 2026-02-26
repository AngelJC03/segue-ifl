// import { React } from 'react';
import './ParentAndStudentHandbookBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import EnglishHandbook from '../../../../../src/assets/pdfs/englishstudenthandbook.pdf';
import SpanishHandbook from '../../../../../src/assets/pdfs/spanishstudenthandbook.pdf';

function ParentAndStudentHandbookBody() {
    return (
        <div className="school-handbook-container">
            <div className="school-handbook-page-title">
                <h1>Parent & Student Handbook</h1>
            </div>

            <FadeIn>
                <p className="school-handbook-content">
                    The Parent & Student Handbook provides important information 
                    regarding school policies, expectations, academic guidelines, 
                    and student conduct. We encourage all families to review the 
                    handbook carefully.
                </p>

                <div className="school-handbook-links">
                    <a 
                        href={EnglishHandbook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        📘 Parent and Student Handbook (English)
                    </a>

                    <br />

                    <a 
                        href={SpanishHandbook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        📘 Manual para estudiantes y padres (Español)
                    </a>
                </div>

                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default ParentAndStudentHandbookBody;