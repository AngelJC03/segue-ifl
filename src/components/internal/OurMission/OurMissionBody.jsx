// import { React } from 'react';
import './OurMissionBody.css';
import image from '../../../assets/images/Internal Pages Images/OurMissionImage.jpg';
import FadeIn from '../fadeinsection/FadeIn.jsx';

function OurMissionBody() {
    return (
        <div className="our-mission-container">
            <div className="page-title">
                <h1> Our Mission </h1>
            </div>
            <FadeIn>
            <div className="our-mission-content">
                <img src={image} alt="Our Mission" className="mission-image" />
                <p>
                    The mission of the Segue Institute for Learning is to 
                    foster a community where students take ownership of their education.
                    Segue scholars receive a rigorous academic experience 
                    that prepares them to excel in the high school and eventual
                    college setting of their choice.
                </p>
                <br/>
                <p>
                    At Segue, we believe that all of our students are AT 
                    PROMISE, versus being labeled At Risk. The Segue Institute for
                    Learning is a safe and nurturing environment which
                     promotes diversity, encourages individual growth and allows students
                    to view themselves as citizens of change in their homes and community.
                </p>
            </div>
            </FadeIn>
        </div>
    )

}

export default OurMissionBody;