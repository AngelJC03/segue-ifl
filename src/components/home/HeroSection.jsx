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
import image2 from '../../assets/images/logo-photos/LegacyHighSchool-logo.png';
import heroTextImage from '../../assets/images/logo-photos/hero-text-image.jpg';


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              alt={`Slide ${index}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
          ))}
      </div>
      <div className="hero-text">
            <img src={heroTextImage} alt="Segue Hero Text" className="hero-text-image" />
            <h1>
              An Independent Public Charter School District<br/>
            </h1>
            <p>Established 2009</p>
      </div>
    </div>

  );
}

export default HeroCarousel;
