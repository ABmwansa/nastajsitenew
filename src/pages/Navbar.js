import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/log.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/team">Our Team</Link></li>
        <li><Link to="/services">Products and Services</Link></li>
        <li className="dropdown">
          <span className="dropbtn">Career </span>
          <span className="dropbtn"> </span>
          <span className="dropbtn"> </span>
          <div className="dropdown-content">
            <Link to="/internships">Internships</Link>
            <Link to="/scholarships">Scholarships</Link>
            <Link to="/jobs">Job Openings</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
