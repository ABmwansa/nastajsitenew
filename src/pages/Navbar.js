import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/logo.jpg';



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
    <li>
  <Link to="/" onClick={closeMenus}>
    <i className="fas fa-home" style={{ marginRight: '8px' }}></i>
    Home
  </Link>
</li>
<li>
  <Link to="/projects" onClick={closeMenus}>
    <i className="fas fa-project-diagram" style={{ marginRight: '8px' }}></i>
    Projects
  </Link>
</li>
<li>
  <Link to="/OurTeam" onClick={closeMenus}>
    <i className="fas fa-users" style={{ marginRight: '8px' }}></i>
    Our Team
  </Link>
</li>
        {/* Products & Services Dropdown */}
        <li
          className="navbar-dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setIsProductDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsProductDropdownOpen(false)}
        >
          <span className="navbar-dropbtn" onClick={toggleProductDropdown}>
            Our Products & Services
          </span>
          <div className={`navbar-dropdown-content ${isProductDropdownOpen ? 'show' : ''}`}>
            <div className="navbar-dropdown-column">
              <h4>Construction</h4>
              <Link style ={{color:'black'}} to="/fabrication" onClick={closeMenus}>
                <i className="fas fa-hammer" style={{ marginRight: '8px', color: 'black' }}></i >Roads, Bridges and Drainage infrastructure
              </Link>
              <Link style ={{color:'black'}}  to="/tiling" onClick={closeMenus}>
                <i className="fas fa-th-large" style={{ marginRight: '8px' }}></i>Buildings and Inductrial infrastructure
              </Link>
              <Link style ={{color:'black'}}  to="/painting" onClick={closeMenus}>
                <i className="fas fa-paint-roller" style={{ marginRight: '8px' }}></i>Dams and irrigation infrastructure
              </Link>
              <Link style ={{color:'black'}}  to="/cabinet-installations" onClick={closeMenus}>
                <i className="fas fa-warehouse" style={{ marginRight: '8px' }}></i>Technical designs and Drawings
              </Link>
              <Link style ={{color:'black'}}  to="/scheming" onClick={closeMenus}>
                <i className="fas fa-pencil-ruler" style={{ marginRight: '8px' }}></i>Scheming
              </Link>
            </div>
            <div className="navbar-dropdown-column">
              <h4>Professional</h4>
              <Link style ={{color:'black'}}  to="/consultancy" onClick={closeMenus}>
                <i className="fas fa-comments" style={{ marginRight: '8px' }}></i>Consultancy
              </Link>
              <Link style ={{color:'black'}}  to="/project-management" onClick={closeMenus}>
                <i className="fas fa-tasks" style={{ marginRight: '8px' }}></i>Project Management
              </Link>
            </div>
            <div className="navbar-dropdown-column">
              <h4>Testing & Manufacturing</h4>
              <Link style ={{color:'black'}}  to="/manufacturing" onClick={closeMenus}>
                <i className="fas fa-industry" style={{ marginRight: '8px' }}></i>Manufacturing
              </Link>
              <Link style ={{color:'black'}}  to="/concrete-testing" onClick={closeMenus}>
                <i className="fas fa-vials" style={{ marginRight: '8px' }}></i>Concrete Testing
              </Link>
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
            <div className="dropdown-content">
              <div className="dropdown-career">
                <Link to="/internships" onClick={closeMenus}>
                  <i className="fas fa-briefcase" style={{ marginRight: '8px' }}></i>Internships
                </Link>
                <Link to="/scholarships" onClick={closeMenus}>
                  <i className="fas fa-graduation-cap" style={{ marginRight: '8px' }}></i>Scholarships
                </Link>
                <Link to="/jobs" onClick={closeMenus}>
                  <i className="fas fa-user-tie" style={{ marginRight: '8px' }}></i>Job Openings
                </Link>
              </div>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
