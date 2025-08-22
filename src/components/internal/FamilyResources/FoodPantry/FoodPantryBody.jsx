// import { React } from 'react';
import './FoodPantryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import image1 from '../../../../assets/images/food-pantry-images/0D43425A-4877-4E77-B04C-4FD137A1947B.jpg';

function FoodPantryBody() {
    return (
        <div className="food-pantry-container">
            <div className="food-pantry-page-title">
                <h1> Segue Food Pantry </h1>
            </div>
            <FadeIn>
                <div className="food-pantry-content">
                    <div className="food-pantry-image1">
                        <img src={image1} alt="Food Pantry" />
                    </div>
                    <p>
                        The food pantry is amazing!
                    </p>
                </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    );
}

export default FoodPantryBody;
