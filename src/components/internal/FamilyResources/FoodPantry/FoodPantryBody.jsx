// import { React } from 'react';
import './FoodPantryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import image1 from '../../../../assets/images/food-pantry-images/0D43425A-4877-4E77-B04C-4FD137A1947B.jpg';
import gallery from '../../../../assets/json/foodPantryGallery.json';
import { useTranslation } from '../../../../hooks/useTranslation';

function FoodPantryBody() {
    const { t } = useTranslation('familyResources');
    
    const images = gallery["2025 Food Pantry"];

    return (
        <div className="food-pantry-container">
            <div className="food-pantry-page-title">
                <h1>{t('foodPantry.title')}</h1>
            </div>
            <FadeIn>
                <div className="food-pantry-content">
                    <div className="food-pantry-image1">
                        <img src={image1} alt={t('foodPantry.heroAlt')} />
                    </div>
                    <br />
                    <p>{t('foodPantry.description')}</p>
                    <br/>
                    <div className="food-pantry-images-grid">
                        {images.slice(1).map((src, index) => (
                            <img 
                                key={index} 
                                src={process.env.PUBLIC_URL + src} 
                                alt={t('foodPantry.galleryAlt', { index: index + 2 })} 
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    );
}

export default FoodPantryBody;
