import React, { useState } from 'react';
import '../styles/Projects.css';
import commitmentImage from '../assets/commitment.PNG'; 
import imagexi from '../assets/imagexi.jpg'; 
import imagex from '../assets/imagex.jpg'; 

const Projects = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeImageSrc, setActiveImageSrc] = useState('');
  const [visibleRowCount, setVisibleRowCount] = useState(3);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedProject(null);
    setVisibleRowCount(3); // Reset visible rows on tab switch
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setShowImageModal(false);
  };

  const closeModal = () => setSelectedProject(null);

  const projects = {
    current: [
      {
        id: 1,
        title: 'Warma Laboratory',
        location: 'Ibex',
        status: 'Ongoing',
        Counsultancy: 'Nas-taj infrastructure services limited',
        contractor: 'Avenir Soleil.',
        startDate: 'Jan 2024',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: commitmentImage,
        description: 'Ongoing construction of a state-of-the-art laboratory with high-grade materials, quality and commitment to specified standards.'
      },
      {
        id: 2,
        title: 'Nas-Taj Office and Apartments',
        location: 'Roma',
        status: 'Ongoing',
        contractor: 'Nas-Taj Infrastructure services Ltd.',
        startDate: 'Feb 2024',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: imagexi,
        description: 'Construction of Modern and state-of-the-art office buildings and apartments under construction.'
      },
      {
        id: 3,
        title: 'Admin Extension',
        location: 'Roma',
        status: 'Ongoing',
        contractor: 'Nas-Taj Ltd.',
        startDate: 'May 2024',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: imagex,
        description: 'Extension of administrative facilities with modern architecture.'
      }
    ],
    complete: [
      {
        id: 4,
        title: 'African Wesleyan University College, Zimba',
        location: 'Zimba',
        status: 'Completed',
        contractor: 'Nas-Taj Ltd.',
        startDate: 'Mar 2023',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: commitmentImage,
        description: 'A completed university college project featuring lecture halls, administrative blocks, and recreational facilities.'
      }
    ],
    upcoming: [
      {
        id: 5,
        title: 'Green Park Project',
        location: 'Mukono',
        status: 'Upcoming',
        contractor: 'Nas-Taj Ltd.',
        startDate: 'Aug 2025',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: imagexi,
        description: 'An eco-conscious green space with walking paths, open-air event zones, and solar-powered lighting.'
      }
    ]
  };

  const renderTableRows = () =>
    projects[activeTab]
      .slice(0, visibleRowCount)
      .map((project) => (
        <tr key={project.id}>
          <td>{project.title}</td>
          <td>{project.location}</td>
          <td>{project.status}</td>
          <td>{project.Counsultancy || '-'}</td>
          <td>{project.contractor}</td>
          <td>{project.startDate}</td>
          <td>
            {project.description.slice(0, 60)}...
            <button className="show-more-btn" onClick={() => openModal(project)}>Show More</button>
          </td>
          <td>
            <img
              src={project.image}
              alt={project.title}
              className="clickable-image"
              onClick={() => {
                setActiveImageSrc(project.image);
                setShowImageModal(true);
                setSelectedProject(null);
              }}
            />
          </td>
          <td>{project.contact}</td>
        </tr>
      ));

  return (
    <div className="projects-wrapper">
      <h1 className="projects-title">Our Projects</h1>
      <div className="tab-buttons">
        <button onClick={() => handleTabClick('current')} className={activeTab === 'current' ? 'active' : ''}>Current Projects</button>
        <button onClick={() => handleTabClick('complete')} className={activeTab === 'complete' ? 'active' : ''}>Completed Projects</button>
        <button onClick={() => handleTabClick('upcoming')} className={activeTab === 'upcoming' ? 'active' : ''}>Upcoming Projects</button>
      </div>

      <div className="table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Status</th>
              <th>Consultancy</th>
              <th>Contractor</th>
              <th>Start Date</th>
              <th>Description</th>
              <th>Image</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>

      {visibleRowCount < projects[activeTab].length && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button className="view-more-btn" onClick={() => setVisibleRowCount(projects[activeTab].length)}>View More</button>
        </div>
      )}

      {showImageModal && (
        <div className="modal-overlay" onClick={() => setShowImageModal(false)}>
          <div className="modal fullscreen-img-modal" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setShowImageModal(false)}>&times;</span>
            <img src={activeImageSrc} alt="Full View" />
          </div>
        </div>
      )}

     {selectedProject && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
     <button className="modal-close" type="button" onClick={closeModal}>&times;</button>

      <h2>{selectedProject.title}</h2>
      <div className="modal-image-container" onClick={() => window.open(selectedProject.image, '_blank')}>
        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
      </div>
      <div className="modal-details">
        <p><strong>Location:</strong> {selectedProject.location}</p>
        <p><strong>Status:</strong> {selectedProject.status}</p>
        <p><strong>Consultancy:</strong> {selectedProject.Counsultancy || '—'}</p>
        <p><strong>Contractor:</strong> {selectedProject.contractor}</p>
        <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
        <p><strong>Contact:</strong> {selectedProject.contact}</p>
        <p className="modal-description">{selectedProject.description}</p>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Projects;
