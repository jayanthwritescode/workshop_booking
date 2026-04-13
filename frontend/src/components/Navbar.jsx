import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          FOSSEE Workshops
        </Link>
        
        <button 
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workshops" className={`nav-link ${isActive('/workshops') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Workshops
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/statistics" className={`nav-link ${isActive('/statistics') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/status" className={`nav-link ${isActive('/status') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Status
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workshop-types" className={`nav-link ${isActive('/workshop-types') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                Types
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
