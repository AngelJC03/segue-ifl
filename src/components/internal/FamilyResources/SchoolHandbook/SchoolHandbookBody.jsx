// import { React } from 'react';
import './SchoolHandbookBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function SchoolHandbookBody() {
    return (
            <div className="school-handbook-container">
                <div className="school-handbook-page-title">
                    <h1> School Handbook </h1>
                </div>
                <FadeIn>
                    <p className="school-handbook-content">
                        
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default SchoolHandbookBody;