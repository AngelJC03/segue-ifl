// import { React } from 'react';
import './TransportationBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function TransportationBody() {
    return (
            <div className="transportation-container">
                <div className="transportation-page-title">
                    <h1> Transportation </h1>
                </div>
                <FadeIn>
                    <p className="transportation-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default TransportationBody;