// import { React } from 'react';
import './MenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import segueLunch from '../../../../assets/images/lunchMenus/segueLunch.jpg';

function MenusBody() {
    return (
            <div className="school-lunch-container">
                <div className="school-lunch-page-title">
                    <h1> Lunch Menus </h1>
                </div>
                <FadeIn>
                    <p className="school-lunch-content">
                        <img src={segueLunch} alt="Segue K-8 Lunch Menu" className="school-lunch-image" />
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default MenusBody;