// import { React } from 'react';
import './SeguePledgeBody.css';
import FadeIn from '../../fadeinsection/FadeIn.jsx';
import image from '../../../assets/images/logo-photos/temp-segue-logo.png'; // Adjust the path as necessary

function SeguePledgeBody() {
    return (
            <div className="segue-pledge-container">
                <div className="segue-pledge-page-title">
                    <h1> Segue Pledge </h1>
                </div>
                <FadeIn>
                <img src={image} alt="Segue Logo" className="segue-pledge-logo" />
                <h1 className="segue-pledge-title">The Segue Pledge</h1>
                <p className="segue-pledge-text">
                    I am a student at the Segue Institute for Learning. <br/>
                    Every day I will work toward being the best that I can be.<br/>
                    I will show <u><strong>R</strong></u>espect to all students <br/>
                    and adults of my community.<br/>
                    I will express <u><strong>E</strong></u>nthusiasm toward school <br/> 
                    and strive to be my best.<br/>
                    I will work toward the <u><strong>A</strong></u>chievement of Segue Standards.<br/>
                    I will model true <u><strong>C</strong></u>itizenship and try to make a difference.<br/>
                    I will engage in <u><strong>H</strong></u>ard Work to reach my goals.<br/>
                    This is my Pledge.<br/>
                    I am a student at the Segue Institute for Learning.<br/>
                </p>
                </FadeIn>
            </div>
    )

}

export default SeguePledgeBody;