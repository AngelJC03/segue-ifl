// import { React } from 'react';
import './FECBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function FECBody() {
    return (
        <div className="fec-container">
            <div className="fec-page-title">
                <h1> Family Engagement Committee </h1>
            </div>
            <FadeIn>
                <div className="fec-content">

                </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    );
}

export default FECBody;
