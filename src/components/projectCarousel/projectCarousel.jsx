import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import slides from './slides';

export default function ProjectCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalTime = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Carousel slides={slides} goToSlide={activeSlide} />
    </div>
  );
}
