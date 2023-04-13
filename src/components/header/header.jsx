import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedNavDropdown from '../animatedDropdown/animatedDropdown';
import logo from '../../assets/logo.png';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/" className="nav-link">
        <img
          src={logo}
          alt="IntelliFusion Logo"
          style={{
            height: '5rem', width: '5rem', padding: 0, margin: 0, marginLeft: '0.5rem',
          }}
        />
      </Link>
      <Nav className="ml-auto" style={{ marginLeft: 'auto', marginRight: '0px' }}>
        <Nav.Link href="#footer">Contact</Nav.Link>
        <Link to="/process" className="nav-link">Process</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Nav.Link>
          <AnimatedNavDropdown
            showDropdown={showDropdown}
            setShowDropdown={() => setShowDropdown(!showDropdown)}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
