// HeroCarousel.jsx
// import React from 'react';
import { useEffect, useState } from 'react';
import './HeroSection.css';
// Importing images for the carousel
import image8 from '../../assets/images/hero-photos/hero-image1.jpg';
import image9 from '../../assets/images/hero-photos/hero-image2.jpg';
import image3 from '../../assets/images/hero-photos/hero-image3.jpg';
import image4 from '../../assets/images/hero-photos/hero-image4.jpg';
import image5 from '../../assets/images/hero-photos/hero-image5.JPG';
import image6 from '../../assets/images/hero-photos/hero-image6.jpg';
import image7 from '../../assets/images/hero-photos/falcon-welcome.png';
import image1 from '../../assets/images/hero-photos/segue-ifl-logo.png';
import image2 from '../../assets/images/hero-photos/LegacyHighSchool-logo.jpg';
import heroTextImage from '../../assets/images/logo-photos/hero-text-image.jpg';
import { useTranslation } from '../../hooks/useTranslation';


const images = [
    image3,
    image2,
    image1,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation('home');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div className="carousel-image-wrapper">
          {images.map((src, index) => (
          <img
              key={index}
              src={src}
              alt={t('hero.slideAlt', { index: index + 1 })}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
          ))}
      </div>
      <div className="hero-text">
            <img src={heroTextImage} alt={t('hero.textImageAlt')} className="hero-text-image" />
      </div>
    </div>

  );
}

export default HeroCarousel;
