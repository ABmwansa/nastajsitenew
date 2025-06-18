import React, { useState } from 'react';
import '../styles/Jobs.css';

const Jobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="jobs-container">
      <h1 className="jobs-heading">Current Job Openings</h1>
      <p className="jobs-intro">
        Join our growing team! Explore exciting career opportunities at Nas-taj in engineering, management, manufacturing, and more.
      </p>

      <div className="job-list">
        <div className="job-card">
          <h3>Site Engineer</h3>
          <p>
            Responsible for overseeing construction activities, managing subcontractors, and ensuring safety and quality standards on site.
          </p>
          <p><strong>Deadline:</strong> 5 June 2025</p>
          <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn" onClick={() => handleApplyClick('Site Engineer')}>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Procurement Officer</h3>
          <p>
            Coordinate procurement of construction materials, negotiate with suppliers, and ensure timely delivery for ongoing projects.
          </p>
         <p><strong>Deadline:</strong> 5 June 2025</p>
          <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn" onClick={() => handleApplyClick('Procurement Officer')}>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>CAD Technician</h3>
          <p>
            Prepare and revise technical drawings, assist engineers with design specifications and ensure compliance with standards.
          </p>
          <p><strong>Location:</strong> Remote / Lusaka HQ</p>
          <p><strong>Deadline:</strong> 5 June 2025</p>
          <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn" onClick={() => handleApplyClick('CAD Technician')}>Apply Now</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Apply for {selectedJob}</h2>
            <p>
              To apply for the <strong>{selectedJob}</strong> position, please send your updated CV and cover letter to:
            </p>
            <p><strong>Email:</strong> <a href="mailto:nastajinf@gmail.com">nastajinf@gmail.com</a></p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
