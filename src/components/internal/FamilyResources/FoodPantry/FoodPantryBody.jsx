// import { React } from 'react';
import './FoodPantryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import image1 from '../../../../assets/images/food-pantry-images/0D43425A-4877-4E77-B04C-4FD137A1947B.jpg';
import gallery from '../../../../assets/json/foodPantryGallery.json';

function FoodPantryBody() {
    
    const images = gallery["2025 Food Pantry"];

    return (
        <div className="food-pantry-container">
            <div className="food-pantry-page-title">
                <h1>Segue Food Pantry</h1>
            </div>
            <FadeIn>
                <div className="food-pantry-content">
                    <div className="food-pantry-image1">
                        <img src={image1} alt="Food Pantry" />
                    </div>
                    <br />
                    <p>
                        The Segue Food Pantry provides nutritious meals and essential supplies to
                        students and families in need. Our goal is to ensure that everyone in our
                        community has access to healthy food, while fostering a welcoming and
                        supportive environment. Whether for daily meals or occasional support, our
                        pantry is here to help nourish both body and mind.
                    </p>
                    <br/>
                    <div className="food-pantry-images-grid">
                        {images.slice(1).map((src, index) => (
                            <img 
                                key={index} 
                                src={process.env.PUBLIC_URL + src} 
                                alt={`Food Pantry ${index + 2}`} 
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
