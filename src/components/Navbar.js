import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text gradient-text">AI Resume Builder</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#resume-builder" onClick={() => setMenuOpen(false)}>Builder</a></li>
          <li><a href="#templates" onClick={() => setMenuOpen(false)}>Templates</a></li>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
        </ul>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

