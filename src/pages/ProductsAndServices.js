import React, { useState } from 'react';
import '../styles/ProductsAndServices.css';
import manufacturingImg from '../assets/manufacturing.jpg';
import testingImg from '../assets/testing.jpg';
// import more images...

const serviceData = [
  {
    title: 'Manufacturing',
    shortDesc: 'High-quality fabrication and metal works.',
    image: manufacturingImg,
    details: [
      { name: 'Steel Frames', image: manufacturingImg, description: 'Durable frames for structures' },
      { name: 'Rebars', image: manufacturingImg, description: 'Precision-cut reinforcement bars' },
    ],
  },
  {
    title: 'Concrete Testing',
    shortDesc: 'On-site and lab-based concrete strength testing.',
    image: testingImg,
    details: [
      { name: 'Cube Crushing', image: testingImg, description: '28-day compressive strength test' },
      { name: 'Slump Test', image: testingImg, description: 'Workability measurement' },
    ],
  },
  // Add more services here...
];

const ProductsAndServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="products-section">
      <h2>Our Products and Services</h2>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.shortDesc}</p>
            <div className="card-buttons">
              <button onClick={() => setSelectedService(service)}>Read More</button>
              <a href="/contact" className="contact-btn">Contact</a>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedService(null)}>&times;</span>
            <h3>{selectedService.title} - Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {selectedService.details.map((item, idx) => (
                  <tr key={idx}>
                    <td><img src={item.image} alt={item.name} /></td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsAndServices;
