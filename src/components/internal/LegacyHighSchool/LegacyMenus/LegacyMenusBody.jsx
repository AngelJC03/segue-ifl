// import { React } from 'react';
import './LegacyMenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function LegacyMenusBody() {
    return (
            <div className="legacy-school-lunch-container">
                <div className="legacy-school-lunch-page-title">
                    <h1> Lunch Menus </h1>
                </div>
                <FadeIn>
                    <p className="legacy-school-lunch-content">
                        This page is currently under construction. Please check back later for updates.
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default LegacyMenusBody;