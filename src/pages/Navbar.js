import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/log.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(prev => !prev);
    }
  };

  const toggleProductDropdown = () => {
    if (window.innerWidth <= 768) {
      setIsProductDropdownOpen(prev => !prev);
    }
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProductDropdownOpen(false);
    setIsHovered(false);
  };

  return (
    <nav className="navbar">
       <div className="navbar-logo">
    <Link to="/">
      <img src={Logo} alt="Nas-taj" className="Na-taj-logo" />
    </Link>
  </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isMobileMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/" onClick={closeMenus}>Home</Link></li>
        <li><Link to="/projects" onClick={closeMenus}>Projects</Link></li>
        <li><Link to="/team" onClick={closeMenus}>Our Team</Link></li>

        {/* Products & Services Dropdown */}
        <li className="dropdown">
          <span className="dropbtn" onClick={toggleProductDropdown}>
            Our Products & Services
          </span>
          <div
            style={{ backgroundColor: 'black' }}
            className={`dropdown-content-contained ${isProductDropdownOpen ? 'show' : ''}`}
          >
            <div className="dropdown-column">
              <h4 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>Construction</h4>
              <Link style={{ color: 'yellowgreen' }} to="/fabrication" onClick={closeMenus}>Fabrication</Link>
              <Link style={{ color: 'yellowgreen' }} to="/tiling" onClick={closeMenus}>Tiling</Link>
              <Link style={{ color: 'yellowgreen' }} to="/painting" onClick={closeMenus}>Painting</Link>
              <Link style={{ color: 'yellowgreen' }} to="/cabinet-installations" onClick={closeMenus}>Cabinet Installations</Link>
              <Link style={{ color: 'yellowgreen' }} to="/scheming" onClick={closeMenus}>Scheming</Link>
            </div>
            <div className="dropdown-column">
              <h4 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>Professional</h4>
              <Link style={{ color: 'yellowgreen' }} to="/consultancy" onClick={closeMenus}>Consultancy</Link>
              <Link style={{ color: 'yellowgreen' }} to="/project-management" onClick={closeMenus}>Project Management</Link>
            </div>
            <div className="dropdown-column">
              <h4 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>Testing & Manufacturing</h4>
              <Link style={{ color: 'yellowgreen' }} to="/manufacturing" onClick={closeMenus}>Manufacturing</Link>
              <Link style={{ color: 'yellowgreen' }} to="/concrete-testing" onClick={closeMenus}>Concrete Testing</Link>
            </div>
          </div>
        </li>

        {/* Career Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative' }}
        >
          <span className="dropbtn">Career</span>
          {isHovered && (
            <div className="dropdown-content" style={{
              display: 'block',
              position: 'absolute',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              zIndex: 1000,
              top: '100%',
              left: 0,
              minWidth: '150px'
            }}>
              <div className="dropdown-career">
              <Link to="/internships" onClick={closeMenus}>Internships</Link>
              <Link to="/scholarships" onClick={closeMenus}>Scholarships</Link>
              <Link to="/jobs" onClick={closeMenus}>Job Openings</Link>
              </div>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
