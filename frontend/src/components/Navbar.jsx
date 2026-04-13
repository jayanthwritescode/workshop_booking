import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">
            <span className="navbar-icon">work</span>
            FOSSEE Workshops
          </Link>
          
          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="hamburger"></span>
          </button>
        </div>

        <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">home</span>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/statistics" className="nav-link" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">bar_chart</span>
                Workshop Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workshops" className="nav-link" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">dashboard</span>
                Workshop Status
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workshop-types" className="nav-link" onClick={() => setIsOpen(false)}>
                <span className="nav-icon">list</span>
                Workshop Types
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
