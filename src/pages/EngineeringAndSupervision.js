import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import valuesImage from '../assets/values.jpg'; // Adjust path as needed
import '../styles/EngineeringAndSupervision.css'; 



const EngineeringAndSupervision = () => {
  return (
    <div className="learn-more-container">
      <div className="learn-more-hero">
        <img src={valuesImage} alt="Engineering Design and Supervision" />
        <h1>Detailed Engineering Design and Supervision</h1>
      </div>

      <div className="learn-more-content">
        {/* Roads, Bridges, and Drainage Infrastructure */}
        <section>
          <h2>🌉 Roads, Bridges, and Drainage Infrastructure</h2>
          <p>
            We provide end-to-end engineering solutions for transportation and drainage networks, including:
          </p>
          <ul>
            <li><strong>Feasibility Studies & Planning:</strong> Route alignment, traffic forecasts, geotechnical investigations, and cost analysis.</li>
            <li><strong>Design:</strong> Geometric design, pavement design, structural bridge design, and drainage solutions.</li>
            <li><strong>Supervision:</strong> On-site quality control, materials testing, contractor coordination, and compliance with safety standards.</li>
          </ul>
          <p><strong>Key Benefits:</strong> Improved traffic flow, reduced flooding risk, durable and cost-effective solutions.</p>
        </section>

        {/* Buildings and Industrial Infrastructure */}
        <section>
          <h2>🏢 Buildings and Industrial Infrastructure</h2>
          <p>
            Our services cover:
          </p>
          <ul>
            <li><strong>Architectural & Structural Design:</strong> Layouts, foundations, superstructures, and MEP integration.</li>
            <li><strong>Warehousing & Industrial Facilities:</strong> Heavy-duty flooring, loading docks, specialized equipment integration.</li>
            <li><strong>Sustainability:</strong> Green building design, energy efficiency, and responsible materials.</li>
          </ul>
          <p><strong>Key Benefits:</strong> Flexible, customized designs, compliance with building codes, and sustainable solutions.</p>
        </section>

        {/* Dams and Irrigation Infrastructure */}
        <section>
          <h2>💧 Dams and Irrigation Infrastructure</h2>
          <p>
            We support agricultural development and water resource management through:
          </p>
          <ul>
            <li><strong>Hydrological Analysis:</strong> Water flow studies, flood modeling, and catchment area assessments.</li>
            <li><strong>Dam Design:</strong> Earthfill, rockfill, and concrete dams.</li>
            <li><strong>Irrigation Systems:</strong> Canals, pipelines, drip irrigation, and water control structures.</li>
            <li><strong>Supervision:</strong> Quality, safety, and environmental compliance.</li>
          </ul>
          <p><strong>Key Benefits:</strong> Enhanced water storage, improved agriculture, and climate-resilient designs.</p>
        </section>

        {/* Our Approach */}
        <section>
          <h2>🔍 Our Approach</h2>
          <p>
            We prioritize stakeholder engagement, innovative solutions, and sustainable practices:
          </p>
          <ul>
            <li><strong>Stakeholder Engagement:</strong> Regular consultations with clients, communities, and authorities.</li>
            <li><strong>Innovation:</strong> Using modern design tools like AutoCAD Civil 3D, BIM, and GIS.</li>
            <li><strong>Sustainability:</strong> Integrating environmental and social safeguards.</li>
            <li><strong>Quality Assurance:</strong> Strict adherence to quality control processes and standards.</li>
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2>🎯 Why Choose Us?</h2>
          <ul>
            <li>🌟 Proven track record of delivering complex infrastructure projects on time and within budget.</li>
            <li>🛠️ Multi-disciplinary team with civil, structural, geotechnical, and environmental expertise.</li>
            <li>🌍 Commitment to sustainable and climate-resilient infrastructure.</li>
            <li>🤝 Transparent communication and collaborative project management.</li>
          </ul>
        </section>

        {/* FAQs */}
        <section>
          <h2>❓ FAQs</h2>
          <ul>
            <li><strong>Q:</strong> How long does the design phase typically take? <br />
                <strong>A:</strong> It depends on project scope, but typically 4-12 weeks for roads, bridges, or buildings.
            </li>
            <li><strong>Q:</strong> Do you handle environmental assessments? <br />
                <strong>A:</strong> Yes, we integrate environmental and social impact assessments into every project.
            </li>
            <li><strong>Q:</strong> Can you provide turnkey services? <br />
                <strong>A:</strong> Absolutely! We handle everything from design to supervision and handover.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>📞 Interested in Partnering with Us?</h2>
          <p>
            Let’s discuss how we can bring your project to life. Contact us today for a consultation!
          </p>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </section>

        {/* Back to Services */}
        <div className="back-button">
          <Link to="/services">← Back to Services</Link>
        </div>
      </div>
    </div>
  );
};

export default EngineeringAndSupervision;
