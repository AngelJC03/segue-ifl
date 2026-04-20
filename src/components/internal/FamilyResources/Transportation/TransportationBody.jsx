// import { React } from 'react';
import './TransportationBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import { useTranslation } from '../../../../hooks/useTranslation';

function TransportationBody() {
    const { t } = useTranslation('familyResources');

    return (
            <div className="transportation-container">
                <div className="transportation-page-title">
                    <h1>{t('transportation.title')}</h1>
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
