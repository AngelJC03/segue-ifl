// import { React } from 'react';
import './FormsAndDeadlinesBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function FormsAndDeadlinesBody() {
    return (
            <div className="forms-and-deadlines-container">
                <div className="forms-and-deadlines-page-title">
                    <h1> Forms and Deadlines </h1>
                </div>
                <FadeIn>
                    <p className="forms-and-deadlines-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default FormsAndDeadlinesBody;