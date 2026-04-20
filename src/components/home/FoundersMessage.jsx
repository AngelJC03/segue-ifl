// import React, { useEffect, useState } from 'react';
import './FoundersMessage.css'; // Import the testimonials CSS
// import { Button } from '../navbar/Button'; // Import the Button component if needed
import foundersPhoto from '../../assets/images/FoundersMessage-photos/Garcia&Lorenco.jpg';
import classroomPhoto from '../../assets/images/FoundersMessage-photos/ClassroomPic.jpg';
import violinPhoto from '../../assets/images/FoundersMessage-photos/ViolinBoy.jpg';
import { useTranslation } from '../../hooks/useTranslation';

function FoundersMessage() {
    const { t } = useTranslation('home');
    const photos = [
        {
            src: foundersPhoto,
            alt: t('foundersMessage.photos.foundersAlt'),
            className: 'FoundersMessage-photo FoundersMessage-photo--large',
        },
        {
            src: violinPhoto,
            alt: t('foundersMessage.photos.violinAlt'),
            className: 'FoundersMessage-photo',
        },
        {
            src: classroomPhoto,
            alt: t('foundersMessage.photos.classroomAlt'),
            className: 'FoundersMessage-photo',
        },
    ];

    return (
        <div className="FoundersMessage-container">
            <div className="FoundersMessage-header">
                <h1>{t('foundersMessage.heading')}</h1>
                <p>
                    {t('foundersMessage.paragraphOne')}
                </p>

                <p>
                    {t('foundersMessage.paragraphTwo')}
                </p>
            </div>
            <div className="FoundersMessage-gallery" aria-label={t('foundersMessage.photos.galleryLabel')}>
                {photos.map((photo) => (
                    <img
                        key={photo.alt}
                        src={photo.src}
                        alt={photo.alt}
                        className={photo.className}
                    />
                ))}
            </div>
        </div>
    );

}

export default FoundersMessage;
