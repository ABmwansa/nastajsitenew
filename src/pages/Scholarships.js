import React, { useState } from 'react';
import '../styles/Scholarships.css';

const Scholarships = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState('');

  const handleApplyClick = (title) => {
    setSelectedScholarship(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedScholarship('');
  };

  return (
    <div className="scholarships-container">
      <h1 className="scholarships-heading">Scholarship Opportunities</h1>
      <p className="scholarships-intro">
        We believe in empowering the next generation. Explore our scholarship programs designed for students passionate about engineering, construction, technology, and innovation.
      </p>

      <div className="scholarship-list">
        <div className="scholarship-card">
          <h3>Engineering Excellence Scholarship</h3>
          <p>
            Awarded to outstanding students pursuing Civil, Electrical, or Mechanical Engineering. Based on academic performance and leadership potential.
          </p>
          <p><strong>Eligibility:</strong> Final-year university students</p>
          <p><strong>Amount:</strong> ZMW 15,000</p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className="not-available"
              onClick={() => handleApplyClick('Engineering Excellence Scholarship (Currently Not Available)')}
              style={{ color: 'red', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Not Available
            </span>
          </p>
          <button className="apply-btn" onClick={() => handleApplyClick('Engineering Excellence Scholarship')}>Apply Now</button>
        </div>

        <div className="scholarship-card">
          <h3>STEM Women in Leadership Grant</h3>
          <p>
            Supporting young women enrolled in STEM courses who demonstrate leadership in their communities or institutions.
          </p>
          <p><strong>Eligibility:</strong> Female STEM students</p>
          <p><strong>Amount:</strong> ZMW 12,000</p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className="not-available"
              onClick={() => handleApplyClick('STEM Women in Leadership Grant (Currently Not Available)')}
              style={{ color: 'red', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Not Available
            </span>
          </p>
          <button className="apply-btn" onClick={() => handleApplyClick('STEM Women in Leadership Grant')}>Apply Now</button>
        </div>

        <div className="scholarship-card">
          <h3>Nas-taj Rural Talent Fund</h3>
          <p>
            Targeted at talented students from rural or underprivileged communities who show academic promise and motivation.
          </p>
          <p><strong>Eligibility:</strong> Grade 12 graduates</p>
          <p><strong>Amount:</strong> ZMW 8,000</p>
          <p>
            <strong>Status:</strong>{' '}
            <span
              className="not-available"
              onClick={() => handleApplyClick('Nas-taj Rural Talent Fund (Currently Not Available)')}
              style={{ color: 'red', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Not Available
            </span>
          </p>
          <button className="apply-btn" onClick={() => handleApplyClick('Nas-taj Rural Talent Fund')}>Apply Now</button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Apply for {selectedScholarship}</h2>
            {selectedScholarship.includes('Not Available') ? (
              <p>
                The <strong>{selectedScholarship.replace(' (Currently Not Available)', '')}</strong> scholarship is currently <strong>closed</strong>. However, you may still send your documents to express interest for future opportunities.
              </p>
            ) : (
              <p>
                To apply for the <strong>{selectedScholarship}</strong>, please send your updated documents and motivation letter to:
              </p>
            )}
            <p><strong>Email:</strong> <a href="mailto:nastajinf@gmail.com">nastajinf@gmail.com</a></p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarships;
