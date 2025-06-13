import React from 'react';
import directorImg from '../assets/director1.jpg';
import managerImg from '../assets/generalManager.jpg';
import supervisorImg from '../assets/supervisor.jpg';
import logo from '../assets/logo.jpg';
import '../styles/OurTeam.css';
const OurTeam = () => {
  return (
    <div className="our-team-container">
      <header className="team-header">
        <img src={logo} alt="Company Logo" className="team-logo" />
        <h1>Meet Our Team</h1>
        <p>Our strength lies in our people — experienced professionals leading with vision and excellence.</p>
      </header>

      <section className="team-section">
  <div className="team-card">
    <img src={directorImg} alt="Director" />
    <h2>Eng. Nahum Stackson Jere</h2>
    <h4>Managing Director</h4>
    <p>
      With over 20 years of industry leadership, Eng. Jere oversees all operational and strategic initiatives,
      ensuring the company remains a beacon of quality and trust in engineering and construction.
    </p>
    <p><strong>Qualifications:</strong><br />
      BSc in Civil and Mechanical Engineering, University of Zambia<br />
      MSc in Structural Engineering
    </p>
  </div>

  <div className="team-card">
    <img src={managerImg} alt="Project Manager" />
    <h2>Ms Nsamwa Chaibela</h2>
    <h4>General Manager</h4>
    <p>
      Nsamwa brings a decade of experience in project execution, stakeholder coordination, and quality control.
      Her leadership ensures projects are delivered on time and to specification.
    </p>
    <p><strong>Qualifications:</strong><br />
      BSc in Business Administration (Economics Minor), University of Zambia
    </p>
  </div>

  <div className="team-card">
    <img src={supervisorImg} alt="Site Supervisor" />
    <h2>Mr. Amos Mwansa</h2>
    <h4>Senior Site Supervisor</h4>
    <p>
      Amos oversees all on-site activities, workforce supervision, and safety compliance, ensuring our standards
      are upheld throughout the construction phase.
    </p>
    <p><strong>Qualifications:</strong><br />
      BSc in Software Engineering<br />
      Certificates in Project Management and Occupational Health & Safety, University of Zambia
    </p>
  </div>
</section>


      <section className="structure-section">
        <h2>Company Management Structure</h2>
        <ul className="structure-list">
          <li><strong>Managing Director</strong> → Executive oversight and strategic decision-making</li>
          <li><strong>Project Managers</strong> → Project planning, monitoring, and client coordination</li>
          <li><strong>Site Engineers</strong> → Daily technical management and implementation</li>
          <li><strong>Supervisors</strong> → On-ground execution, worker management, safety checks</li>
          <li><strong>Support Staff</strong> → Procurement, logistics, admin and quality assurance</li>
        </ul>
      </section>
    </div>
  );
};

export default OurTeam;
