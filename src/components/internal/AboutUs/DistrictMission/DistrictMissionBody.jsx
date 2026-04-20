// import { React } from 'react';
import './DistrictMissionBody.css';
import image from '../../../../assets/images/Internal Pages Images/GarciaGrad.jpg';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import CenteredLogo from '../../../CenteredLogo.jsx';
import { useTranslation } from '../../../../hooks/useTranslation';

function DistrictMissionBody() {
    const { t } = useTranslation('about');
    const paragraphs = t('districtMission.paragraphs');

    return (
        <div className="our-mission-container">
            <div className="our-mission-page-title">
                <h1>{t('districtMission.title')}</h1>
            </div>
            <FadeIn>
            <div className="our-mission-content">
                <p>
                    <img src={image} alt={t('districtMission.imageAlt')} className="mission-image" />
                    {paragraphs[0]}
                </p>
                
                <p>{paragraphs[1]}</p>
            </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    )

}

export default DistrictMissionBody;
