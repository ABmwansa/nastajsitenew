import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/log.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

   // Handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


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
  <li className="dropdown">
  <span className="dropbtn">Our Products & Services</span>
 <div style={{backgroundColor:'black'}} className="dropdown-content-contained">
  <div className="dropdown-column">
    <h4 style={{fontSize:'30px',fontStyle:'bold', color: 'white'}}>Construction</h4>
    <Link style={{color:'yellowgreen'}} to="/fabrication">Fabrication</Link>
    <Link style={{color:'yellowgreen'}}  to="/tiling">Tiling</Link>
    <Link  style={{color:'yellowgreen'}} to="/painting">Painting</Link>
    <Link style={{color:'yellowgreen'}}  to="/cabinet-installations">Cabinet Installations</Link>
    <Link style={{color:'yellowgreen'}}  to="/scheming">Scheming</Link>
  </div>
  <div className="dropdown-column">
    <h4 style={{fontSize:'30px',fontStyle:'bold',color: 'white'}}>Professional</h4>
    <Link style={{color:'yellowgreen'}}  to="/consultancy">Consultancy</Link>
    <Link style={{color:'yellowgreen'}}  to="/project-management">Project Management</Link>
  </div>
  <div className="dropdown-column">
    <h4 style={{fontSize:'30px', fontStyle:'bold',color: 'white' }}>Testing & Manufacturing</h4>
    <Link style={{color:'yellowgreen'}}  to="/manufacturing">Manufacturing</Link>
    <Link style={{color:'yellowgreen'}}  to="/concrete-testing">Concrete Testing</Link>
  </div>
</div>

</li>

    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <Link to="/internships" onClick={() => setIsHovered(false)}>Internships</Link>
          <Link to="/scholarships" onClick={() => setIsHovered(false)}>Scholarships</Link>
          <Link to="/jobs" onClick={() => setIsHovered(false)}>Job Openings</Link>
        </div>
      )}
    </div>
</ul>

    </nav>
  );
};

export default Navbar;
