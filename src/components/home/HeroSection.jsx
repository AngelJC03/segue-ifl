// HeroCarousel.jsx
// import React from 'react';
import { useEffect, useState } from 'react';
import './HeroSection.css';
import { Button } from '../navbar/Button'; // Import the Button component if needed
// Importing images for the carousel
import image1 from '../../assets/images/hero-photos/hero-image1.jpg';
import image2 from '../../assets/images/hero-photos/hero-image2.jpg';
import image3 from '../../assets/images/hero-photos/hero-image3.jpg';
import image4 from '../../assets/images/hero-photos/hero-image4.jpg';
import image5 from '../../assets/images/hero-photos/hero-image5.JPG';
import image6 from '../../assets/images/hero-photos/hero-image6.jpg';
import image from '../../assets/images/logo-photos/temp-segue-logo.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

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
          <img src={image} alt="Segue Logo" className="hero-logo" />
          <h1>Welcome to Segue Institute for Learning</h1>
          <p><strong>Where Every Student is "At Promise"</strong></p>
          <br />
          <Button buttonStyle="btn--primary" buttonSize="btn--large" onClick={() => window.location.href = '/our-mission'}>
              Learn More
          </Button>
      </div>
    </div>

  );
}

export default HeroCarousel;
