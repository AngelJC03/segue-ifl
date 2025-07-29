// import { React } from 'react';
import './SchoolLunchBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function SchoolLunchBody() {
    return (
            <div className="school-lunch-container">
                <div className="school-lunch-page-title">
                    <h1> School Lunch </h1>
                </div>
                <FadeIn>
                    <p className="school-lunch-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default SchoolLunchBody;