import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/log.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(prev => !prev);
    }
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Nas-taj" className="Na-taj-logo" />
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isMobileMenuOpen ? "navbar-links active" : "navbar-links"}>
  <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
  <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
  <li><Link to="/team" onClick={toggleMobileMenu}>Our Team</Link></li>
  <li><Link to="/services" onClick={toggleMobileMenu}>Products and Services</Link></li>
  <li className="dropdown">
    <span className="dropbtn">Career</span>
    <div className="dropdown-content">
      <Link to="/internships" onClick={toggleMobileMenu}>Internships</Link>
      <Link to="/scholarships" onClick={toggleMobileMenu}>Scholarships</Link>
      <Link to="/jobs" onClick={toggleMobileMenu}>Job Openings</Link>
    </div>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
