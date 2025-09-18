// import { React } from 'react';
import './LegacyMenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import legacyBreakfast from '../../../../assets/images/lunchMenus/legacybreakfast.jpg';
import legacyLunch from '../../../../assets/images/lunchMenus/legacyLunch.jpg';

function LegacyMenusBody() {
    return (
            <div className="legacy-school-lunch-container">
                <div className="legacy-school-lunch-page-title">
                    <h1> Lunch Menus </h1>
                </div>
                <FadeIn>
                    <p className="legacy-school-lunch-content">
                        <h1>
                            Breakfast Menu
                        </h1>
                        <img src={legacyBreakfast} alt="Legacy High School Breakfast Menu" className="legacy-school-lunch-image" />
                        <h1>
                            Lunch Menu
                        </h1>
                        <img src={legacyLunch} alt="Legacy High School Lunch Menu" className="legacy-school-lunch-image" />
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default LegacyMenusBody;