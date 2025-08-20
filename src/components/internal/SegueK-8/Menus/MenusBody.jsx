// import { React } from 'react';
import './MenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function MenusBody() {
    return (
            <div className="school-lunch-container">
                <div className="school-lunch-page-title">
                    <h1> Lunch Menus </h1>
                </div>
                <FadeIn>
                    <p className="school-lunch-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default MenusBody;