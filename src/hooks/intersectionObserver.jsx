import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    // console.log(1);
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entery) => {
        setVisible(entery.isIntersecting);
      });
    });
    observer.observe(documentRef.current);
  }, []);

  return (
    <div
      ref={documentRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.func.isRequired,
};

export default FadeInSection;
