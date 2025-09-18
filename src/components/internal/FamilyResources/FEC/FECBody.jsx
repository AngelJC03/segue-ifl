// import { React } from 'react';
import './FECBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import FECenglish from '../../../../assets/images/FECPhotos/FECenglish.jpg';
import FECspanish from '../../../../assets/images/FECPhotos/FECspanish.jpg';

function FECBody() {
    return (
        <div className="fec-container">
            <div className="fec-page-title">
                <h1> Family Engagement Committee </h1>
            </div>
            <FadeIn>
                <div className="fec-content">
                    <p>
                        The Family Engagement Committee (FEC) is a group of dedicated parents, guardians, and family members who work collaboratively to support and enhance the educational experience of our students. The FEC serves as a bridge between families and the school community, fostering open communication, collaboration, and engagement.
                    </p>
                    <img src={FECenglish} alt="FEC English Flyer" className="fec-image" />
                    <h1>
                        Contact Information:
                    </h1>
                    <p>
                        <ul>
                            <li>
                                <strong>Nadya Sanches</strong> - District Coordinator: <a href="mailto:Nadya.Sanches@segueifl.org">Nadya.Sanches@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Monica Cortes</strong> - K-8 Coordinator: <a href="mailto:Monica.Cortes@segueifl.org">Monica.Cortes@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Cheryl Luciano</strong> - Legacy Coordinator: <a href="mailto:Cheryl.Luciano@segueifl.org">Cheryl.Luciano@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Maria Porras</strong> - Food Pantry Coordinator: <a href="mailto:Maria.Porras@segueifl.org">Maria.Porras@segueifl.org</a>
                                <br />
                            </li>
                        </ul>
                    </p>
                    <img src={FECspanish} alt="FEC Spanish Flyer" className="fec-image" />
                    <h1>
                        Informacion de Contacto:
                    </h1>
                    <p>
                        <ul>
                            <li>
                                <strong>Nadya Sanches</strong> - Coordinadora del Distrito <a href="mailto:Nadya.Sanches@segueifl.org">Nadya.Sanches@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Monica Cortes</strong> - Coordinadora en K-8 <a href="mailto:Monica.Cortes@segueifl.org">Monica.Cortes@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Cheryl Luciano</strong> - Coordinadora en Legacy HS <a href="mailto:Cheryl.Luciano@segueifl.org">Cheryl.Luciano@segueifl.org</a>
                                <br />
                            </li>
                            <li>
                                <strong>Maria Porras</strong> - Coordinadora de Despensa de Comida <a href="mailto:Maria.Porras@segueifl.org">Maria.Porras@segueifl.org</a>
                                <br />
                            </li>
                        </ul>
                    </p>
                </div>
            </FadeIn>
            <CenteredLogo />
        </div>
    );
}

export default FECBody;
