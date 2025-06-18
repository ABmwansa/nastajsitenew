import React, { useState } from 'react';
import '../styles/Projects.css';
import commitmentImage from '../assets/commitment.PNG'; 
import imagexi from '../assets/imagexi.jpg'; 
import imagex from '../assets/imagex.jpg'; 
import unzarg from '../assets/Unza RG.png'; 
import chamuka from '../assets/chamuka.png'; 
import cbu from '../assets/cbu.png'; 
import emarald from '../assets/emarald.png'; 
import mandevu from '../assets/mandevu.png'; 
import Apex from '../assets/apex.png'; 



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
        title: 'Warma Laboratory, UNDP',
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
        Counsultancy: 'Nas-taj infrastructure services limited',
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
        Counsultancy: 'Nas-taj infrastructure services limited',

        startDate: 'May 2024',
        contact: 'mwansa.amosb@gmail.com 0979235167',
        image: imagex,
        description: 'Extension of administrative facilities with modern architecture.'
      }
    ],
    complete: [
  {
    id: 4,
    title: 'Upgrading of ~35km Chisamba to Chief Chamuka Road',
    location: 'Chisamba District, Central Province',
    status: 'Completed',
    Counsultancy: 'Nas-taj infrastructure services limited',
    startDate: '2020/2021',
    contact: 'mwansa.amosb@gmail.com 0979235167',
    image: chamuka,
    description: 'Contract awarded for the upgrading of approximately 35km of the Chisamba to Chief Chamuka road in Chisamba District, Central Province.'
  },
  {
  id: 5,
  title: 'Consulting Services for the Detailed Engineering Design of 150km of the RD 488 - Kaindu Road',
  location: 'Mumbwa District, Central Province',
  status: 'Completed',
  Counsultancy: 'Nas-taj infrastructure services limited',
  startDate: '2020',
  contact: 'mwansa.amosb@gmail.com 0979235167',
  image: commitmentImage, 
  description: '2020/2021: Contract for the periodic maintenance and detailed design of selected feeder roads in Mumbwa District, including 150km of the Mumbwa-Kaindu (RD 488) Road in Central Province.'
},
{
  id: 6,
  title: 'Proposed Multi-Storey Buildings: Lecture Hall, Pharmacy Laboratories, and Offices for the University of Zambia, Ridgeway Campus',
  location: 'University of Zambia, Ridgeway Campus',
  status: 'Completed',
  Counsultancy: 'Nas-taj infrastructure services limited',
  startDate: '2020/2021',
  contact: 'mwansa.amosb@gmail.com | +260 979 235 167',
  image: unzarg,
  description: 'Nas-Taj Ltd. provided comprehensive services including architectural design, structural engineering, mechanical (HVAC) and electrical design, as well as full project supervision for the construction of multi-storey lecture halls, pharmacy laboratories, and office buildings at the University of Zambia Ridgeway Campus. The project was successfully delivered in line with quality standards and institutional requirements.'
}
,
 {
  id: 7,
  title: 'Consulting Services for the Development of Emerald Hill Park: 890 Plots',
  location: 'Lusaka District, Lusaka Province',
  status: 'Completed',
  Counsultancy: 'Nas-taj infrastructure services limited',
  startDate: '2020/2021',
  contact: 'mwansa.amosb@gmail.com 0979235167',
  image: emarald, // Replace with actual project image if available
  description: 'Provided planning, engineering design, and consultancy services for the development of Emerald Hill Park comprising 890 residential plots, including internal roads, drainage, and basic infrastructure layouts.'
}
,
  {
    id: 8,
    title: 'CONSTRUCTION OF MULTI STOREY ANALYTICAL AND POSTGRADUATE RESEARCH LABORATORIES BUILDING AT THE COPPERBELT UNIVERSITY, KITWE',
    location: 'Copperbelt University, Copperbelt Province',
    status: 'Completed',
    Counsultancy: 'Nas-taj infrastructure services limited',
    startDate: '2023/2024',
    contact: 'mwansa.amosb@gmail.com 0979235167',
    image: cbu,
    description: 'Contract awarded for the structural engineering design, civil works design, environmental and social impact assessment (ESIA) study, and project supervision for the upgrading of approximately 35km of the Chisamba to Chief Chamuka road in Chisamba District, Central Province. The project was funded by The World Bank.'

  },
{
  id: 9,
  title: 'MILLENIUM PROJECT COMPLETION AGENCY (MPCA-Z): MCC COMPACT 1-ZAMBIA',
  location: 'Mandevu District, Lusaka Province',
  status: 'Completed',
  Counsultancy: 'Nas-taj infrastructure services limited',
  startDate: '2023/2024',
  contact: 'mwansa.amosb@gmail.com 0979235167',
  image: mandevu,
  description: 'Contract awarded for the structural assessment and remediation of collapsed sections along the Chisamba to Chief Chamuka Road (approximately 35km) in Chisamba District, Central Province. Scope included assessment of sections CP7/4, CP7/7, CP8/1, structural design for remediation of CP7/4, and full project supervision.'
},

  {
  id: 10,
  title: 'PROPOSED MULTI-STOREY MODERN FACULTY BUILDING FOR LUSAKA APEX MEDICAL UNIVERSITY ON PLOT 3153844, CHALALA CAMPUS, LUSAKA',
  location: 'Chalala Campus, Lusaka',
  status: 'Implementation Stage',
  Counsultancy: 'Nas-taj infrastructure services limited',
  startDate: '2023/2024',
  contact: 'mwansa.amosb@gmail.com 0979235167',
  image: Apex,
  description: 'Contract awarded for the proposed multi-storey modern faculty building at Lusaka Apex Medical University, Chalala Campus. Scope of works includes structural engineering design, mechanical services and HVAC, electrical design, and full project supervision.'
}
,
],

    upcoming: [
      {
        id: 5,
        title: 'Green Park Project',
        location: 'Mukono',
        status: 'Upcoming',

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
            <span className="modal-close" style={{color: 'red'}} onClick={() => setShowImageModal(false)}>&times;</span>
            <img src={activeImageSrc} alt="Full View" />
          </div>
        </div>
      )}

     {selectedProject && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
     <button className="modal-close" type="button" style={{color: 'red'}} onClick={closeModal}>&times;</button>

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
