// import { React } from 'react';
import './MenusBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
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
                    <p className="school-lunch-content">
                        <img src={segueLunch} alt={t('menus.imageAlt')} className="school-lunch-image" />
                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default MenusBody;
