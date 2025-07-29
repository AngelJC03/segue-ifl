// import { React } from 'react';
import './PhotoGalleryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';

function PhotoGalleryBody() {
    return (
            <div className="photo-gallery-container">
                <div className="photo-gallery-page-title">
                    <h1> Photo Gallery </h1>
                </div>
                <FadeIn>
                    <p className="photo-gallery-content">

                    </p>
                    <CenteredLogo />
                </FadeIn>
            </div>
    )

}

export default PhotoGalleryBody;