import React from 'react';
import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
    const [mapLink, setMapLink] = useState('');

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const link = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a2c5b434e1!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus`;
              setMapLink(link);
            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      };
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="subtitle">We'd love to hear from you! Reach out to us for any inquiries or support.</p>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>Phone: +26-0975938290/+26-0965055667</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>Email: info@Nas-Taj.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Address:NO. 3, Mugoti Road, Roma, Lusaka, Zambia</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <h2>Our Location</h2>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a2c5b434e1!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;