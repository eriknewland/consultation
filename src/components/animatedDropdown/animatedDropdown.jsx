import React from 'react';
import './animatedDropdown.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AnimatedNavDropdown({
  showDropdown, // boolean
  setShowDropdown, // function
}) {
  return (
    <div className="dropdown-wrapper">
      <button
        onClick={setShowDropdown}
        className="trigger-button"
        type="button"
      >
        More
      </button>
      <ul className={showDropdown ? 'active' : ''}>
        <li><Link to="/about" style={{ color: 'black', textDecoration: 'none' }} onClick={setShowDropdown}>About</Link></li>
        <li><Link to="/team" style={{ color: 'black', textDecoration: 'none' }} onClick={setShowDropdown}>Team</Link></li>
        <li><Link to="/testimonials" style={{ color: 'black', textDecoration: 'none' }} onClick={setShowDropdown}>Testimonials</Link></li>
        <li><Link to="/classroom" style={{ color: 'black', textDecoration: 'none' }} onClick={setShowDropdown}>Classroom</Link></li>
      </ul>
    </div>
  );
}

AnimatedNavDropdown.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
};

export default AnimatedNavDropdown;
