import './UniformPolicyBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function UniformPolicyBody() {
    return (
        <div className="uniform-policy-container">
            <div className="uniform-policy-page-title">
                <h1>Uniform Policy</h1>
            </div>
            <FadeIn>
                <div className="uniform-policy-content">
                    <ul className="expectation-list">
                        <li>
                            <strong>Formal Uniform (Non-Gym Days)</strong>
                            <ul>
                                <li>Maroon Segue polo (short or long sleeve)</li>
                                <li>Black or khaki pants, shorts, or skirt</li>
                                <li>Sneakers (any color)</li>
                                <li>Leggings may be worn under skirts/shorts</li>
                                <li>Long-sleeve undershirts may be worn under polos in colder months</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="uniform-policy-prohibited">
                        <strong>Not allowed:</strong> jeans, hoodies, hats, Uggs, Crocs, open-toed shoes, sandals, slippers, heels, moccasins
                    </div>
                    <ul className="expectation-list">
                        <li>
                            <strong>PE Uniform (Gym Days)</strong>
                            <ul>
                                <li>Grey or maroon Segue T-shirt</li>
                                <li>Maroon Segue-issued sweatpants and sweatshirt</li>
                                <li>Sneakers (any color)</li>
                                <li>Same prohibited items as formal uniform</li>
                                <li>Layering encouraged during colder months</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default UniformPolicyBody;
