import React from 'react';
import directorImg from '../assets/director1.jpg';
import managerImg from '../assets/generalManager.jpg';
import supervisorImg from '../assets/supervisor.jpg';
import logo from '../assets/logo.jpg';
import '../styles/OurTeam.css';

const OurTeam = () => {
  return (
    <div className="our-team">
      <header className="team-header">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>Meet Our Team</h1>
        <p>Our strength lies in experienced professionals leading with vision and excellence.</p>
      </header>

      {/* Leadership Section */}
      <section>
        <h2 className="section-title">Leadership</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={directorImg} alt="Director" />
            <h3>Eng. Nahum Stackson Jere</h3>
            <p className="role">Managing Director</p>
            <p>20+ years of leadership in construction and engineering.</p>
            <p><strong>Qualifications:</strong><br />BSc Civil & Mechanical Eng., MSc Structural Eng.</p>
          </div>
          <div className="team-card">
  {/* <img src={directorImg} alt="Director" /> */}
  <h3>Ms Monde Nyambe</h3>
  <p className="role">Director</p>
  <p>20+ years of leadership in construction and engineering.</p>
  <p>
    <strong>Qualifications:</strong><br />
    BSc Civil & Mechanical Engineering, MSc Structural Engineering
  </p>
</div>
        </div>
      </section>

      {/* Admin Section */}
      <section>
        <h2 className="section-title">Administration</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={managerImg} alt="General Manager" />
            <h3>Ms Nsamwa Chaibela</h3>
            <p className="role">General Manager</p>
            <p>Expert in project execution and stakeholder coordination.</p>
            <p><strong>Qualifications:</strong><br />BSc Business Admin (UNZA)</p>
          </div>
          <div className="team-card">
            <img src={supervisorImg} alt="Senior Supervisor" />
            <h3>Mr. Amos Mwansa</h3>
            <p className="role">Senior Site Supervisor</p>
            <p>Oversees on-site activities and safety compliance.</p>
            <p><strong>Qualifications:</strong><br />BSc Software Eng., Cert. in Project Management & Safety</p>
          </div>
        </div>
      </section>

      {/* Supervisors & Interns */}
      <section>
        <h2 className="section-title">Supervisors & Intern Architects</h2>
        <div className="team-grid">
          {[
            'Salifyanji',
            'Henshel Chongo',
            'Kalaluka Mubita',
            'Carine Ngabile',
            'Chembe Pomboloka',
            'Mybin',
            'Iforce Mwenda',
            'Abraham Nyambe'
          ].map((name, index) => (
            <div className="team-card" key={index}>
              <h3>{name}</h3>
              <p className="role">{index < 4 ? 'Student Architect' : 'Supervisor'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Summary */}
      <section className="structure">
        <h2 className="section-title">Company Management Structure</h2>
        <ul>
          <li><strong>Managing Director</strong> → Executive oversight</li>
          <li><strong>Project Managers</strong> → Planning & client coordination</li>
          <li><strong>Site Engineers</strong> → Technical implementation</li>
          <li><strong>Supervisors</strong> → Site management & safety</li>
          <li><strong>Support Staff</strong> → Procurement, logistics, admin</li>
        </ul>
      </section>
    </div>
  );
};

export default OurTeam;
