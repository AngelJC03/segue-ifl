// import { React } from 'react';
import './AdmissionsAndLotteryBody.css';
import FadeIn from '../../fadeinsection/FadeIn';
import CenteredLogo from '../../CenteredLogo';

function AdmissionsAndLotteryBody() {
    return (
            <div className="admissions-and-lottery-container">
                <div className="admissions-and-lottery-page-title">
                    <h1> Admissions and Lottery </h1>
                </div>
                <FadeIn>
                    <p className="admissions-and-lottery-content">
                      
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default AdmissionsAndLotteryBody;