// import { React } from 'react';
import './ParentAndStudentHandbookBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function ParentAndStudentHandbookBody() {
    return (
            <div className="school-handbook-container">
                <div className="school-handbook-page-title">
                    <h1> Parent & Student Handbook </h1>
                </div>
                <FadeIn>
                    <p className="school-handbook-content">
                        
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default ParentAndStudentHandbookBody;