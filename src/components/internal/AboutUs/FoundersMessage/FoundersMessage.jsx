// import { React } from 'react';
import './FoundersMessage.css';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import image1 from '../../../../assets/images/FoundersMessage-photos/Garcia&Lorenco.jpg';
import image2 from '../../../../assets/images/FoundersMessage-photos/ClassroomPic.jpg'; // This image is not used in the component, but can be used if needed
import image3 from '../../../../assets/images/FoundersMessage-photos/ViolinBoy.jpg'; // This image is not used in the component, but can be used if needed
import CenteredLogo from '../../../CenteredLogo.jsx';
import { useTranslation } from '../../../../hooks/useTranslation';

function FoundersMessageBody() {
    const { t } = useTranslation('about');
    const paragraphs = t('foundersMessagePage.paragraphs');
    const signoff = t('foundersMessagePage.signoff');

    return (
        <div className="founders-message-container">
            <div className="founders-message-page-title">
                        <h1>{t('foundersMessagePage.pageTitle')}</h1>
                    </div>
                <div className="founders-message-content">
                     <FadeIn>
                    <div className="top-half">
                        <p>{t('foundersMessagePage.intro')}</p>
                        <img src={image1} alt={t('foundersMessagePage.topImageAlt')} className="founders-image" /> 
                    </div>
                    <div className="bottom-half">
                        <h1>{t('foundersMessagePage.sectionTitle')}</h1>
                        <div className="text-content">
                            <p>{paragraphs[0]}</p>
                            <p>{paragraphs[1]}</p>
                            <img src={image3} alt={t('foundersMessagePage.middleImageAlt')} className="violinboy-image" />
                            <p>{paragraphs[2]}</p>
                            <p>{paragraphs[3]}</p>
                            <p>{paragraphs[4]}</p>
                            <img src={image2} alt={t('foundersMessagePage.bottomImageAlt')} className="classroom-image" />
                            <p>{paragraphs[5]}</p>
                            <p>{paragraphs[6]}</p>
                            <p>{paragraphs[7]}</p>

                            <blockquote className="founders-signoff">
                                — {signoff[0]}<br />
                                {signoff[1]}
                            </blockquote>
                        </div>
                    </div>
                    <CenteredLogo />
                    </FadeIn>
                </div>
        </div>
    )

}

export default FoundersMessageBody;
