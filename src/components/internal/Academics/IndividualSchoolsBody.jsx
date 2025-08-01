import './IndividualSchoolsBody.css';
import FadeIn from '../../fadeinsection/FadeIn';
import CenteredLogo from '../../CenteredLogo';

function IndividualSchoolsBody() {
    return (
        <div className="individual-schools-container">
            <div className="individual-schools-page-title">
                <h1> Individual Schools </h1>
            </div>
            <FadeIn>
                <div className="individual-schools-content">
                    <p>
                        LIST/DETAILS OF <br/>
                        INDIVIDUAL SCHOOLS WILL GO HERE.
                    </p>
                </div>
                <CenteredLogo />
            </FadeIn>
        </div>
    );
}

export default IndividualSchoolsBody;
