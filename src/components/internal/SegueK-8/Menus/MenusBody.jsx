// import { React } from 'react';
import './MenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import segueBreakfast from '../../../../assets/images/lunchMenus/segueBreakfast.jpg';
import segueLunch from '../../../../assets/images/lunchMenus/segueLunch.jpg';
import { useTranslation } from '../../../../hooks/useTranslation';

function MenusBody() {
    const { t } = useTranslation('segueK8');

    return (
            <div className="school-lunch-container">
                <div className="school-lunch-page-title">
                    <h1>{t('menus.title')}</h1>
                </div>
                <FadeIn>
                    <div className="school-lunch-content">
                        <p>{t('menus.breakfastTitle')}</p>
                        <img src={segueBreakfast} alt={t('menus.breakfastAlt')} className="school-lunch-image" />
                        <p>{t('menus.lunchTitle')}</p>
                        <img src={segueLunch} alt={t('menus.lunchAlt')} className="school-lunch-image" />
                    </div>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default MenusBody;
