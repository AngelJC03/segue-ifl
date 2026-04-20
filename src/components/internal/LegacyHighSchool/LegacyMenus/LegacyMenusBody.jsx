// import { React } from 'react';
import './LegacyMenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import legacyBreakfast from '../../../../assets/images/lunchMenus/legacybreakfast.jpg';
import legacyLunch from '../../../../assets/images/lunchMenus/legacyLunch.jpg';
import { useTranslation } from '../../../../hooks/useTranslation';

function LegacyMenusBody() {
    const { t } = useTranslation('legacy');

    return (
            <div className="legacy-school-lunch-container">
                <div className="legacy-school-lunch-page-title">
                    <h1>{t('menus.title')}</h1>
                </div>
                <FadeIn>
                    <p className="legacy-school-lunch-content">
                        <h1>{t('menus.breakfastTitle')}</h1>
                        <img src={legacyBreakfast} alt={t('menus.breakfastAlt')} className="legacy-school-lunch-image" />
                        <h1>{t('menus.lunchTitle')}</h1>
                        <img src={legacyLunch} alt={t('menus.lunchAlt')} className="legacy-school-lunch-image" />
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default LegacyMenusBody;
