
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Home.css'; 
import heroImage from '../assets/2c.jpg'; 
import commitmentImage from '../assets/commitment.PNG'; 
import valuesImage from '../assets/imagexii.jpg';
import missionImage from '../assets/society.jpg'; 
import Consultancy from '../assets/image4.jpg'; 
import Manufacturing from '../assets/society.jpg'; 
import nastajoffice from '../assets/imagexi.jpg'; 
import whatsappLogo from '../assets/whatsapp.png';
import officespace from '../assets/construction-bg.jpg.jpeg.png';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Our Values',
      description: 'We are committed to integrity, quality, and sustainability in every project we undertake.',
      image: Consultancy,
    },
    {
      title: 'Our Commitment',
      description: 'We promise to deliver excellence, on time and within budget, every single time.',
      image: commitmentImage,
    },
    {
      title: 'Our Mission',
      description: 'To build innovative and sustainable structures that stand the test of time.',
      image: missionImage,
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 7000);
  
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1 style={{ color: 'white', fontSize: '2rem' }}>Building Your Dreams into Reality</h1>
          <p style={{ color: 'white', fontSize: '2rem' }}>
            Quality construction services tailored to your needs.
          </p>
          <button className="cta-button" onClick={handleClick}>Contact Us</button>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="about-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="about-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
          <button className="learn-more-button" style={{ height: '50px', width: '200px' }}>Learn More</button>
        </div>
        <div className="about-image">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </div>
        <button className="slider-arrow left-arrow" onClick={prevSlide}>&#10094;</button>
        <button className="slider-arrow right-arrow" onClick={nextSlide}>&#10095;</button>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={valuesImage} alt="Values" />
            <h3>Detailed Engineering design and Supervision of:</h3>
            <p>
              Roads, Bridges, and Drainage Infrastructure<br />
              ✓ Buildings and Industrial Infrastructure, Warehousing<br />
              ✓ Dams and Irrigation Infrastructure
            </p>
            <button className="Learn-more">Learn More</button>
          </div>
          <div className="service-card">
            <img src={missionImage} alt="Mission" />
            <h3>Construction Implementation</h3>
            <p>Water Supply and Sanitation Infrastructure</p>
            <button className="Learn-more">Learn More</button>
          </div>
          <div className="service-card">
            <img src={Consultancy} alt="Consultancy" />
            <h3>Consultancy</h3>
            <p>Providing top Quality Professional Consultancy and Supervising.</p>
            <button className="Learn-more">Learn More</button>
          </div>
          <div className="service-card">
            <img src={Manufacturing} alt="Manufacturing" />
            <h3>Manufacturing</h3>
            <p>Providing top Quality Professional Consultancy and Supervising.</p>
            <button className="Learn-more">Learn More</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={commitmentImage} alt="Project 1" />
            <p>Warma Laboratory</p>
          </div>
          <div className="project-card">
            <img src={nastajoffice} alt="Project 2" />
            <p>Nas-taj Offices</p>
          </div>
          <div className="project-card">
            <img src={officespace} alt="Project 3" />
            <p>Office Spaces</p>
          </div>
          <div className="project-card">
            <Link to="/projects" className="view-more-projects-btn">View More Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-overlay">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The team was professional and delivered beyond our expectations. Highly recommend!"</p>
              <h4>Hencshel Chongo</h4>
            </div>
            <div className="testimonial-card">
              <p>"Great communication and quality work. Will definitely work with them again."</p>
              <h4>Amos Mwansa</h4>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/260979235167"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo dancing-logo" />
      </a>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <button className="contact-button" onClick={toggleForm}>Contact Us</button>
        {isFormVisible && (
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>Nas-Taj</h2>
            <p>At Nas-Taj Infrastructure Ltd., we are committed to delivering innovative construction solutions that shape the future.</p>
          </div>

          <div className="footer-center">
            <h3>Nas-Taj Infrastructure Services Limited</h3>
            <p>
              Visit Our Offices in{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=15.4067,28.2871"
                target="_blank"
                rel="noopener noreferrer"
              >
                Roma
              </a>
            </p>

            <div className="newsletter">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Send Email</button>
            </div>
          </div>

          <div className="footer-container-modern">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Leadership</li>
                <li>Safety</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>News + Insights</h3>
              <ul>
                <li>News</li>
                <li>Brochures</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Industries We Serve</h3>
              <ul>
                <li>Energy + Chemicals</li>
                <li>Power + Utilities</li>
                <li>Energy Transition</li>
                <li>Manufacturing + Infrastructure</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services We Offer</h3>
              <ul>
                <li>Engineering</li>
                <li>Procurement</li>
                <li>Fabrication</li>
                <li>Construction Services</li>
                <li>Project Management</li>
                <li>Automation + Controls</li>
                <li>Operations + Maintenance</li>
                <li>Field Services</li>
                <li>Environmental</li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div className="social-links">
              <p>Follow Us</p>
              <div className="media">
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-facebook"></i></a>
                <a href="/"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="contact">
              <p>Call Us</p>
              <i className="fas fa-phone"></i>
              <p>Phone: +26-0975938290 / +26-0965055667</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Nas-Taj. All rights reserved.</p>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
